def rightTringle(num):
    for i in range(num+1):
        for j in range(i):
            print('*',end="")
        print(' ')

rightTringle(5)