fi = open("wild_turkey_2019.csv","r")
fi.readline()
mylist = fi.readlines()
fi.close()

fo = open("turkey.csv","w")
collate = []
colvals = []
for line in mylist:
	line = line.rstrip()
	templist = line.split(";")
	x = collate.count(templist[0])
	z = int(templist[4])
	if (x == 0):
		collate.append(templist[0])
		colvals.append(z)
	else:
		ind = collate.index(templist[0])
		print(ind,z)
		y = colvals[ind] + z
		colvals[ind] = y
	
c = 0
for i in collate:
	fo.write(i + "," + str(colvals[c]) + "\n")
	c = c + 1

fo.close()
