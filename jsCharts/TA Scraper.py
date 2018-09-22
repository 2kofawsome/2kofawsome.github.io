from bs4 import BeautifulSoup #used to create HTML layout in python
import requests, re, time #requests pulls page, re searches for strings, time creates delay so it doesnt overload

startTime=time.time()

resultsWin = {} #a dictonary of score distribution of winners
resultsLose = {} #a dictonary of score distribution of losers
winPercent=[]

for n in range(21): #adds the 21 achievements to the dic
    resultsWin[str(n)] = 0
    resultsLose[str(n)] = 0
    winPercent.append(0)

#NP means No puddings (people who score 0), P or nothing means with puddings included
achievementDistributionNP = [0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0] #The distribution of difficulties
achievementDistribution = [0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0]
achievementP = [[], [], [], [], [], [], [] ,[] ,[] ,[]] #To collect average achievements per difficulty
achievementNP = [[], [], [], [], [], [], [] ,[] ,[] ,[]]

#starts at str(x), then loops for 772 first 4 weeks, then 256, 128, 64, 32, etc
#18907
#19679
#20451
#21223
startURL = 21223
for n in range(772): #loops this code for x match ups
    if n % 100 == 0:
        print("loop")
    pageLink = "https://www.trueachievements.com/event/UHH-4/matchup/" + str(startURL+n) #thankfully TrueAcheivements uses counting as url (not recommended for this reason)
    while True:
        try: #allows error (timeout)
            pageContent = BeautifulSoup(requests.get(pageLink, timeout=5).content, "html.parser")#grabs page, turns it into html string, max wait of 5 seconds

            findScore = re.compile(r"""\d+""", re.VERBOSE) #regex to find the score within string
            findRatio = re.compile(r"""\d+\.\d+""", re.VERBOSE) #regex to find the ratio of achievements
            
            achievementRatio = 0 #sum will be difficulty of list
            for m in pageContent.find_all(class_=" odd") + pageContent.find_all(class_=" even"): #loops through 20 achievements
                achievementRatio += float(findRatio.findall(str(m))[0])

            if achievementRatio < 25: #if less than 25 difficulty (min)
                achievementRatio = 0
            elif achievementRatio >= 65: #if over 65 (max)
                achievementRatio = 9
            else:
                achievementRatio = int((achievementRatio-20)//5) #subtracts 20, then floors from 5
            try: #gets exception if a draw (only when both scored nothing)
                winScore = findScore.findall(str(pageContent.find(class_=" winning")))[0] #finds winner's score
                loseScore = findScore.findall(str(pageContent.find(class_=" losing")))[0] #finds loser's
                resultsWin[winScore] += 1 #adds score to dictionary
                resultsLose[loseScore] += 1

                achievementNP[achievementRatio].append(int(winScore)) #adds score to find average
                achievementDistributionNP[achievementRatio]+=1 #adds to distribution

                if int(loseScore) > 0: #if loser did not have 0
                    achievementNP[achievementRatio].append(int(loseScore)) #adds to no pudding
                    achievementDistributionNP[achievementRatio]+=1 #adds distribution

            except IndexError: #if both are 0
                    winScore = "0" #sets values, program crashes on double loss without exception
                    loseScore = "0"
                    resultsLose["0"] += 2


            achievementP[achievementRatio].append(int(winScore)) #adds all above stuff to with puddings
            achievementDistribution[achievementRatio]+=2
            achievementP[achievementRatio].append(int(loseScore))
            break
        except:
            print("Timeout at " + str(startURL+n)) #if took too long, I can manually fix it

withPud=[0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0] #finds average # of cheevos
noPud=[0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0]
for m in range(len(achievementP)): #loops for length (21 possibilities)
    for n in achievementP[m]: #loops for number of times people were in the category
        withPud[m] += n #adds their score
    try:
        withPud[m] = withPud[m] / len(achievementP[m]) #if not 0, divide by the amount their were for average
    except:
        withPud[m] = 0 #if 0, we dont want an error so just set to 0
for m in range(len(achievementNP)):#same as above but for no puddings
    for n in achievementNP[m]:
        noPud[m] += n
    try:
        noPud[m] = noPud[m] / len(achievementNP[m])
    except:
        noPud[m] = 0
for m in range(len(resultsWin)):#same as above but for no puddings
    try:
        winPercent[m] = round((resultsWin[str(m)] / (resultsWin[str(m)]+resultsLose[str(m)]))*100, 2)
    except ZeroDivisionError:
        winPercent[m] = 0.00

print("With Puddings") #printing all the results
print(withPud)
print("")
print("No Puddings")
print(noPud)
print("")
print("Achievement Distribution WP")
print(achievementDistribution)
print("")
print("Achievement Distribution NP")
print(achievementDistributionNP)
print("")
print("Results Win")
print(resultsWin)
print("")
print("Results Loss")
print(resultsLose)
print("")
print("Win Percent")
print(winPercent)

print("")
print("")
print("")
print(time.time()-startTime)

fileLines = open("./template.txt").readlines() #opens in list form
#file = open(".\RecentResults.txt", 'a') #opens board in append mode
#file.write(saveSu) #adds the board
#file.write("\n") #clicks enter for next board
#file.close()

#print(fileLines)

file = open("./RecentResults.txt","w+")

for n in range(10): #pud vs no
    fileLines[3+n*4] = fileLines[3+n*4][:-1] + str(withPud[n]) + '",\n'
    fileLines[43+n*5] = fileLines[43+n*5][:-1] + str(noPud[n]) + '",\n'
    fileLines[363+n*4] = fileLines[363+n*4][:-1] + str(withPud[n]) + '",\n'
    fileLines[409+n*4] = fileLines[409+n*4][:-1] + str(noPud[n]) + '",\n'
    fileLines[4+n*4] = fileLines[4+n*4][:-1] + str(achievementDistribution[n]) + '",\n'
    fileLines[44+n*5] = fileLines[44+n*5][:-1] + str(achievementDistributionNP[n]) + '",\n'
    fileLines[364+n*4] = fileLines[364+n*4][:-1] + str(achievementDistribution[n]) + '",\n'
    fileLines[410+n*4] = fileLines[410+n*4][:-1] + str(achievementDistributionNP[n]) + '",\n'

    fileLines[517+n] = fileLines[517+n][:-1] + str(round(withPud[n], 2)) + '"\n'
    fileLines[527+n] = fileLines[527+n][:-1] + str(round(noPud[n], 2)) + '"\n'
    fileLines[608+n] = fileLines[608+n][:-1] + str(round(withPud[n], 2)) + '"\n'
    fileLines[618+n] = fileLines[618+n][:-1] + str(round(noPud[n], 2)) + '"\n'

for n in range(21): #pud vs no
    fileLines[98+n*4] = fileLines[98+n*4][:-1] + str(resultsWin[str(n)]) + '",\n'
    fileLines[186+n*4] = fileLines[186+n*4][:-1] + str(resultsLose[str(n)]) + '",\n'
    fileLines[274+n*4] = fileLines[274+n*4][:-1] + str(winPercent[n]) + '",\n'

    fileLines[452+n] = fileLines[452+n][:-1] + str(resultsWin[str(n)]) + '"\n'
    fileLines[473+n] = fileLines[473+n][:-1] + str(resultsLose[str(n)]) + '"\n'
    fileLines[494+n] = fileLines[494+n][:-1] + str(round(winPercent[n], 1)) + '%"\n'
    fileLines[543+n] = fileLines[543+n][:-1] + str(resultsWin[str(n)]) + '"\n'
    fileLines[564+n] = fileLines[564+n][:-1] + str(resultsLose[str(n)]) + '"\n'
    fileLines[585+n] = fileLines[585+n][:-1] + str(round(winPercent[n], 1)) + '%"\n'
    
for n in range(len(fileLines)):
     file.write(fileLines[n])

file.close()
