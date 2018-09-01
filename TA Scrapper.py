#! python3.6

from bs4 import BeautifulSoup
import requests, re, time

resultsWin = {}
resultsLose = {}

for n in range(21):
    resultsWin[str(n)] = 0
    resultsLose[str(n)] = 0

#for n in 772:
for n in range(772):
    blah = time.time()
    pageLink = "https://www.trueachievements.com/event/UHH-4/matchup/" + str(18907+n)
    try:
        pageContent = BeautifulSoup(requests.get(pageLink, timeout=5).content, "html.parser")

        findScore = re.compile(r"""\d+""", re.VERBOSE)
        try:
            resultsWin[findScore.findall(str(pageContent.find(class_=" winning")))[0]] += 1
            resultsLose[findScore.findall(str(pageContent.find(class_=" losing")))[0]] += 1
        except IndexError:
            resultsLose["0"] += 2

    except:
        print("Timeout at " + str(18907+n))
    time.sleep(time.time()-blah)
        


print(resultsWin)
print("")
print(resultsLose)
