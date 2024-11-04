def get_top_student(subject: str, dataset: dict):
    maxMarks = 0
    maxStudent = ""
    for name, marks in dataset.items():
        if maxMarks < marks:
            maxMarks = marks
            maxStudent = name

    return maxStudent,maxMarks

lines = None
with open('miniPrjctData.txt') as file:
    lines = file.readlines()

if not lines:
    print("Error")
    exit()

marks_lines = lines[1:]
subjectMarks = {}
for line in marks_lines:
    entries = line.split(',')
    name = entries[0].strip()
    subject = entries[1].strip()
    marks = int(entries[2].strip())
    
    if subject not in subjectMarks:
        subjectMarks[subject] = {}
    
    subjectMarks[subject][name] = marks
      
for subject, dataset in subjectMarks.items():
    name, marks = get_top_student(subject,dataset)
    msg = f"Top Student for {subject} is {name} got {marks} marks."
    print(msg)