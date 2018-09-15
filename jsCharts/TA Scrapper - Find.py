from bs4 import BeautifulSoup #used to create HTML layout in python
import requests, re, time #requests pulls page, re searches for strings, time creates delay so it doesnt overload

startTime=time.time()

matchup = []

print("""Type the exact URL you are looking for (copied from acheivement list page)


Example: /a63277/the-example-acheivement""")

searchFor = input()
    
#starts at str(x), then loops for 772 first 4 weeks, then 256, 128, 64, 32, etc
#18907
#19679
#20451
#
startURL = 20451
for n in range(772): #loops this code for x match ups
    if n % 100 == 0:
        print("loop")
    pageLink = "https://www.trueachievements.com/event/UHH-4/matchup/" + str(startURL+n) #thankfully TrueAcheivements uses counting as url (not recommended for this reason)
    while True:
        try: #allows error (timeout)
            pageContent = BeautifulSoup(requests.get(pageLink, timeout=5).content, "html.parser")#grabs page, turns it into html string, max wait of 5 seconds

            find = re.compile(r"""\\a\d+""", re.VERBOSE) #regex to find the ratio of achievements

            achievementRatio = 0 #sum will be difficulty of list
            for m in pageContent.find_all(class_=" odd") + pageContent.find_all(class_=" even"): #loops through 20 achievements
                if str(m.find(class_="achievement").a.get("href")) == searchFor:
                    print(startURL+n)
                    matchup.append(startURL+n)
            break
        except:
            print("Timeout at " + str(startURL+n)) #if took too long, it repeats



print("Match ups with achievement:") #printing all the results
print(matchup)

print("")
print("")
print("")
print(time.time()-startTime)
