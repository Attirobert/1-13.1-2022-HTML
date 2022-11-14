class Mobil: # Osztály
    csörög = "csörög"
    kikapcsol = "kikapcsol"
    bekapcsol = "bekapcsol"

    def Csörög(telefon): # 1. Metódus
        print(telefon, csörög)
    def Kikapcsol(telefon): # 2. Metódus
        print(telefon, kikapcsol)
    def Bekapcsol(telefon): # 3. Metódus
        print(telefon, bekapcsol)


mobil = Mobil()
mobil.Bekapcsol("A telefon")
mobil.Csörög("A telefon")
mobil.Kikapcsol("A telefon")
