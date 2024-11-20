function solveLock(lockNumber, movements) {
  const validMovements = new Set(['U', 'D', 'L', 'R'])
  let position = 0
  const digits = lockNumber.toString().split('')
  let length = digits.length - 1

  for (const move of movements) {
    if (!validMovements.has(move)) continue

    switch (move) {
      case 'U':
        digits[position] = (digits[position] == 9) ? 0 : ++digits[position]
        break
      case 'D':
        digits[position] = (digits[position] == 0) ? 9 : --digits[position]
        break
      case 'L':
        position = (position == 0) ? length : --position
        break
      case 'R':
        position = (position == length) ? 0 : ++position
        break
      default:
        break
    }
  }
  return digits.join('')
}

console.log(solveLock(528934712834, 'URDURUDRUDLLLLUUDDUDUDUDLLRRRR')) // 628934712834

