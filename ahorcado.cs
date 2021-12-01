using System;

namespace HolaMundo
{
    class Program
    {
        static void Main()
        {
            string palabra;
            int n;
            Console.WriteLine("Cantidad de letras de tu frase");
            n = Convert.ToInt32(Console.ReadLine());
            
            Console.WriteLine("Ingresa la frase a adivinar");
            palabra = Console.ReadLine();
            
            string palabraMostrar = "";
            for (int i = 0; i < n; i++)
               if (palabra[i] == " ")
                  palabraMostrar = palabraMostrar + " ";
                else
                  palabraMostrar = palabraMostrar + "-";
         
            
            int intentosRestantes = 5;
            char letraReal;
            bool final = false;
            
            while
            {
                Console.WriteLine("Palabra incognito: {0}", palabraMostrar);
                Console.WriteLine("Intentos restantes: {0}", intentosRestantes);
                
                Console.Write("Ingresa la letra: ");
                letraReal = Convert.ToChar(Console.ReadLine());
                
                if (palabra.IndexOf(letraReal) == -1)
                   intentosRestantes--;
                
                string siguienteIndicar = "";
                
                for (int i = 0; i < n; i++)
                {
                    if (letraReal == palabra[i])
                       siguienteIndicar = siguienteIndicar + letraReal;
                    else
                       siguienteIndicar = siguienteIndicar + palabraMostrar[i];
                }
                palabraMostrar = siguienteIndicar;
                
                if (palabraMostrar.IndexOf("-") < 0)
                {
                    Console.WriteLine("Felicidades has acertado la frase!    , la frase es: {0}", palabra);
                    final = true;
                }
                if (intentosRestantes == 0)
                {
                    Console.WriteLine("Has fallado, la frase es: {0}", palabra);
                    final = true;
                }
                Console.WriteLine();
            }
            while (final);
            Console.ReadKey();
        }
    }
}