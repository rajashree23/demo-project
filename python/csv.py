

import csv


fields = ['name', 'email', 'password','tag']


rows = [ ['Monalisha Mishra','mishramonalisha76@gmail.com', '123456','1'],
         ['Rajashree', 'rajashreeparhi23@gmail.com', '25678','2']]



filename = "subscribers.csv"


with open(filename, 'w') as csvfile:

    csvwriter = csv.writer(csvfile)


    csvwriter.writerow(fields)


    csvwriter.writerows(rows)
