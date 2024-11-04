def get_top_student(subject: str, dataset: dict):
    maxMarks = 0
    maxStudent = ""
    for name, marks in dataset.items():
        if maxMarks < marks:
            maxMarks = marks
            maxStudent = name

    return maxStudent,maxMarks

def getMarks(record: tuple):
    return record[1]

lines = None
with open('miniPrjctData.txt') as file:
    lines = file.readlines()

if not lines:
    print("Error")
    exit()

marks_lines = lines[1:]
subjectMarks = {}
studentMarks = {}

for line in marks_lines:
    entries = line.split(',')
    name = entries[0].strip()
    subject = entries[1].strip()
    marks = int(entries[2].strip())
    
    if subject not in subjectMarks:
        subjectMarks[subject] = {}
    
    subjectMarks[subject][name] = marks
    
    prevMarks = studentMarks.get(name, 0)
    studentMarks[name] = prevMarks + marks
  
message = []        
for subject, dataset in subjectMarks.items():
    name, marks = get_top_student(subject,dataset)
    msg = f"Top Student for {subject} is {name} got {marks} marks."
    print(msg)
    message.append(msg)
    
markList = [ (name, marks) for name, marks in studentMarks.items()]
markList.sort(key=getMarks, reverse=True)
topNameAndMarks = markList[0]
msg2 = f"*********************\nTop student is {topNameAndMarks[0]} got {topNameAndMarks[1]} marks\n**********************"
print(msg2)
message.append(msg2)

with open('results.txt', 'w') as outputFile:
    for msg in message:
        outputFile.write(msg)
        outputFile.write('\n')
