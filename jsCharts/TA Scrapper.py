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
achievements = [[], [], [], [], [], [], [] ,[] ,[] ,[]]
for n in range(200):
    blah = time.time()
    pageLink = "https://www.trueachievements.com/event/UHH-4/matchup/" + str(18907+n)
    try:
        pageContent = BeautifulSoup(requests.get(pageLink, timeout=5).content, "html.parser")

        findScore = re.compile(r"""\d+""", re.VERBOSE)
        findRatio = re.compile(r"""\d+\.\d+""", re.VERBOSE)

        achievementRatio = 0
        for m in pageContent.find_all(class_=" odd") + pageContent.find_all(class_=" even"):
            achievementRatio += int(float(findRatio.findall(str(m))[0])*100)
            
        if achievementRatio < 2500:
            achievements[0].append(achievementRatio) #no, append score
        elif achievementRatio < 3000:
            achievements[1].append(achievementRatio)
        elif achievementRatio < 3500:
            achievements[2].append(achievementRatio)
        elif achievementRatio < 4000:
            achievements[3].append(achievementRatio)
        elif achievementRatio < 4500:
            achievements[4].append(achievementRatio)
        elif achievementRatio < 5000:
            achievements[5].append(achievementRatio)
        elif achievementRatio < 5500:
            achievements[6].append(achievementRatio)
        elif achievementRatio < 6000:
            achievements[7].append(achievementRatio)
        elif achievementRatio < 6500:
            achievements[8].append(achievementRatio)
        elif achievementRatio >= 6500:
            achievements[9].append(achievementRatio)
        try:
            resultsWin[findScore.findall(str(pageContent.find(class_=" winning")))[0]] += 1
            resultsLose[findScore.findall(str(pageContent.find(class_=" losing")))[0]] += 1
        except IndexError:
            resultsLose["0"] += 2

    except:
        print("Timeout at " + str(18907+n))
    time.sleep(time.time()-blah)
        

print(achievements)
print("___________")
print(resultsWin)
print("")
print(resultsLose)
