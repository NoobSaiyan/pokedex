import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Image, Text, Flex, HStack, Tag, VStack } from '@chakra-ui/react'
import './information.css'

const Information = () => {
  let { id } = useParams()
  const [info, setInfo] = useState({})
  useEffect(() => {
    async function fetchInfo() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      )
      setInfo(response.data)
    }
    fetchInfo()
  }, [id])
  return (
    <div className='boxContainer'>
      <Box p='5' height='500px' width='350px' borderWidth='1px' margin='10px'>
        <Image
          borderRadius='md'
          boxSize='300px'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        />
        <Text
          textTransform='capitalize'
          fontWeight='500'
          bgColor='green'
          textAlign='center'
          marginBottom='10px'
          fontSize='25px'
        >
          {info.name}
        </Text>
        <VStack spacing={2} align='stretch'>
          <Flex>
            <Text
              textTransform='capitalize'
              fontWeight='500'
              fontSize='15px'
              marginRight='20px'
            >
              Height
            </Text>
            <Text textTransform='capitalize' fontWeight='400' fontSize='15px'>
              {info.height}
            </Text>
          </Flex>
          <Flex>
            <Text
              textTransform='capitalize'
              fontWeight='500'
              fontSize='15px'
              marginRight='20px'
            >
              Weight
            </Text>
            <Text textTransform='capitalize' fontWeight='400' fontSize='15px'>
              {info.weight}
            </Text>
          </Flex>
          <Flex>
            <Text
              textTransform='capitalize'
              fontWeight='500'
              fontSize='15px'
              marginRight='20px'
            >
              Type
            </Text>
            <HStack spacing={2}>
              {info?.types &&
                info.types.map((type) => (
                  <Tag variant='solid' colorScheme='teal'>
                    {type.type.name}
                  </Tag>
                ))}
            </HStack>
          </Flex>
          <Flex>
            <Text
              textTransform='capitalize'
              fontWeight='500'
              fontSize='15px'
              marginRight='20px'
            >
              Base Experience
            </Text>
            <Text textTransform='capitalize' fontWeight='400' fontSize='15px'>
              {info.base_experience}
            </Text>
          </Flex>
        </VStack>
      </Box>
    </div>
  )
}

export default Information
