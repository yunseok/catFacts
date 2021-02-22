with open("facts", "r") as text_file:
    facts_list = text_file.readlines()
    for fact in facts_list:
        print('"{0}",'.format(fact))