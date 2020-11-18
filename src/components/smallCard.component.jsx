import { Box, Image, Text } from '@chakra-ui/react'
export default function SmallCard({ name, img }) {
  name = name.toUpperCase()
  return (
    <Box as='button' p='5' width='150px' borderWidth='1px' margin='10px'>
      <Image
        borderRadius='md'
        boxSize='110px'
        align='center'
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${img}.png`}
      />

      <Text
        bgColor='pink'
        alignItems='center'
        whiteSpace='nowrap'
        textOverflow='ellipsis'
        overflow='hidden'
      >
        {name}
      </Text>
    </Box>
  )
}
