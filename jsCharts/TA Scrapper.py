#! python3.6

from decimal import Decimal
from bs4 import BeautifulSoup
import requests, re, time

resultsWin = {}
resultsLose = {}

for n in range(21):
    resultsWin[str(n)] = 0
    resultsLose[str(n)] = 0

#18907
#19679
#
#
achievementDistributionNP = [0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0]
achievementDistribution = [0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0]
achievementP = [[], [], [], [], [], [], [] ,[] ,[] ,[]]
achievementNP = [[], [], [], [], [], [], [] ,[] ,[] ,[]]
for n in range(772):
    blah = time.time()
    pageLink = "https://www.trueachievements.com/event/UHH-4/matchup/" + str(18907+n)
    try:
        pageContent = BeautifulSoup(requests.get(pageLink, timeout=5).content, "html.parser")

        findScore = re.compile(r"""\d+""", re.VERBOSE)
        findRatio = re.compile(r"""\d+\.\d+""", re.VERBOSE)

        achievementRatio = 0
        for m in pageContent.find_all(class_=" odd") + pageContent.find_all(class_=" even"):
            achievementRatio += int(float(findRatio.findall(str(m))[0])*100)

        try:
            winScore = findScore.findall(str(pageContent.find(class_=" winning")))[0]
            loseScore = findScore.findall(str(pageContent.find(class_=" losing")))[0]
            resultsWin[winScore] += 1
            resultsLose[loseScore] += 1

            if achievementRatio < 2500: #add score not ratio sum
                achievementNP[0].append(int(winScore))
                achievementDistributionNP[0]+=1
            elif achievementRatio < 3000:
                achievementNP[1].append(int(winScore))
                achievementDistributionNP[1]+=1
            elif achievementRatio < 3500:
                achievementNP[2].append(int(winScore))
                achievementDistributionNP[2]+=1
            elif achievementRatio < 4000:
                achievementNP[3].append(int(winScore))
                achievementDistributionNP[3]+=1
            elif achievementRatio < 4500:
                achievementNP[4].append(int(winScore))
                achievementDistributionNP[4]+=1
            elif achievementRatio < 5000:
                achievementNP[5].append(int(winScore))
                achievementDistributionNP[5]+=1
            elif achievementRatio < 5500:
                achievementNP[6].append(int(winScore))
                achievementDistributionNP[6]+=1
            elif achievementRatio < 6000:
                achievementNP[7].append(int(winScore))
                achievementDistributionNP[7]+=1
            elif achievementRatio < 6500:
                achievementNP[8].append(int(winScore))
                achievementDistributionNP[8]+=1
            elif achievementRatio >= 6500:
                achievementNP[9].append(int(winScore))
                achievementDistributionNP[9]+=1

            if int(loseScore) > 0:
                if achievementRatio < 2500: #add score not ratio sum
                    achievementNP[0].append(int(loseScore))
                    achievementDistributionNP[0]+=1
                elif achievementRatio < 3000:
                    achievementNP[1].append(int(loseScore))
                    achievementDistributionNP[1]+=1
                elif achievementRatio < 3500:
                    achievementNP[2].append(int(loseScore))
                    achievementDistributionNP[2]+=1
                elif achievementRatio < 4000:
                    achievementNP[3].append(int(loseScore))
                    achievementDistributionNP[3]+=1
                elif achievementRatio < 4500:
                    achievementNP[4].append(int(loseScore))
                    achievementDistributionNP[4]+=1
                elif achievementRatio < 5000:
                    achievementNP[5].append(int(loseScore))
                    achievementDistributionNP[5]+=1
                elif achievementRatio < 5500:
                    achievementNP[6].append(int(loseScore))
                    achievementDistributionNP[6]+=1
                elif achievementRatio < 6000:
                    achievementNP[7].append(int(loseScore))
                    achievementDistributionNP[7]+=1
                elif achievementRatio < 6500:
                    achievementNP[8].append(int(loseScore))
                    achievementDistributionNP[8]+=1
                elif achievementRatio >= 6500:
                    achievementNP[9].append(int(loseScore))
                    achievementDistributionNP[9]+=1
            
        except IndexError:
                winScore = "0"
                loseScore = "0"
                resultsLose["0"] += 2

        
        if achievementRatio < 2500: #add score not ratio sum
            achievementP[0].append(int(winScore))
            achievementDistribution[0]+=2
        elif achievementRatio < 3000:
            achievementP[1].append(int(winScore))
            achievementDistribution[1]+=2
        elif achievementRatio < 3500:
            achievementP[2].append(int(winScore))
            achievementDistribution[2]+=2
        elif achievementRatio < 4000:
            achievementP[3].append(int(winScore))
            achievementDistribution[3]+=2
        elif achievementRatio < 4500:
            achievementP[4].append(int(winScore))
            achievementDistribution[4]+=2
        elif achievementRatio < 5000:
            achievementP[5].append(int(winScore))
            achievementDistribution[5]+=2
        elif achievementRatio < 5500:
            achievementP[6].append(int(winScore))
            achievementDistribution[6]+=2
        elif achievementRatio < 6000:
            achievementP[7].append(int(winScore))
            achievementDistribution[7]+=2
        elif achievementRatio < 6500:
            achievementP[8].append(int(winScore))
            achievementDistribution[8]+=2
        elif achievementRatio >= 6500:
            achievementP[9].append(int(winScore))
            achievementDistribution[9]+=2

        if achievementRatio < 2500: #add score not ratio sum
            achievementP[0].append(int(loseScore))
        elif achievementRatio < 3000:
            achievementP[1].append(int(loseScore))
        elif achievementRatio < 3500:
            achievementP[2].append(int(loseScore))
        elif achievementRatio < 4000:
            achievementP[3].append(int(loseScore))
        elif achievementRatio < 4500:
            achievementP[4].append(int(loseScore))
        elif achievementRatio < 5000:
            achievementP[5].append(int(loseScore))
        elif achievementRatio < 5500:
            achievementP[6].append(int(loseScore))
        elif achievementRatio < 6000:
            achievementP[7].append(int(loseScore))
        elif achievementRatio < 6500:
            achievementP[8].append(int(loseScore))
        elif achievementRatio >= 6500:
            achievementP[9].append(int(loseScore))

    except:
        print("Timeout at " + str(18907+n))
    time.sleep(time.time()-blah)

withPud=[0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0]
noPud=[0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0]
for m in range(len(achievementP)):
    for n in achievementP[m]:
        withPud[m] += n
    try:
        withPud[m] = withPud[m] / len(achievementP[m])
    except:
        withPud[m] = 0
for m in range(len(achievementNP)):
    for n in achievementNP[m]:
        noPud[m] += n
    try:
        noPud[m] = noPud[m] / len(achievementNP[m])
    except:
        noPud[m] = 0

print("With Puddings")
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
