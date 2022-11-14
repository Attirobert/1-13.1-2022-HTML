import turtle

class Teknos:
    def Rajzol(hányszor, fok):
        screen.Clear()
        teknős = turtle.Turtle()

        for x in range(0,hányszor):
            teknős.Left(fok)
            teknős.Forward(100)


screen = turtle.Screen()
teknős = turtle.Turtle()

Teknos.Rajzol(3,60)
Teknos.Rajzol(4,90)
Teknos.Rajzol(6,60)
Teknos.Rajzol(8,45)

screen.mainloop()
