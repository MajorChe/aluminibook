name = "this is global"
def greet():
  name = "che"
  def hello():
    name = "major"
    print(name)
  hello()
print(name)
greet()
print(name)