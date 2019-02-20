

import csv


fields = ['name', 'email', 'password']


rows = [ ['Monalisha Mishra','mishramonalisha76@gmail.com', '123456'],
         ['Rajashree', 'rajashreeparhi23@gmail.com', '25678']]



filename = "university_records.csv"


with open(filename, 'w') as csvfile:

    csvwriter = csv.writer(csvfile)


    csvwriter.writerow(fields)

    
    csvwriter.writerows(rows)
