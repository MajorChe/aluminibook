def count_primes(num):
  primes = []
  if num == 2:
    return 1
  elif num == 1 or num <= 0:
    return "invalid"
  else:
    for item in range(3,num,2):
      tempo = []
      for item2 in range(2,item):
        if item % item2 == 0:
          tempo.append(item)
        else:
          pass
      if len(tempo) == 0:
        primes.append(item)
      else:
        pass
  print(len(primes)+1)

count_primes(1000)
