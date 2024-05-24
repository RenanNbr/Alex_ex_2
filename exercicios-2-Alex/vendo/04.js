// Função para processar números
function processNumber(numbers, filter_callback, map_callback, reduce_callback) {
    // Filtra os números
    const filtered_numbers = numbers.filter(filter_callback);
  
    // Mapeia os números
    const mapped_numbers = filtered_numbers.map(map_callback);
  
    // Reduz os números a um único valor
    const reduced_number = mapped_numbers.reduce(reduce_callback);
  
    // Imprime os resultados
    console.log("Número reduzido:", reduced_number);
  }
  
  // Callback para filtrar números pares
  function filter_even_numbers(num) {
    return num % 2 === 0;
  }
  
  // Callback para dobrar o valor de números pares
  function map_double_even_numbers(num) {
    return num * 2;
  }
  
  // Callback para somar números
  function reduce_sum_numbers(accumulator, currentValue) {
    return accumulator + currentValue;
  }
  
  // Lista de números
  const numbers = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
                   22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
                   42, 44, 46, 48, 50, 52, 54, 56, 58, 60,
                   62, 64, 66, 68, 70, 72, 74, 76, 78, 80,
                   82, 84, 86, 88, 90, 92, 94, 96, 98, 100];
  
  // Processa os números
  processNumber(numbers, filter_even_numbers, map_double_even_numbers, reduce_sum_numbers);