

import React from 'react'
import { Box, BoxItem, BoxItemDetails, BoxItemImage, Title } from './Analytics.styled'
import { useTranslate } from '../../../../locals/useTranslate';

type Props = {}

const Analytics = (props: Props) => {
    const { translate, language } = useTranslate();
  return (
    <Box>
        <BoxItem>
            <BoxItemDetails>
                <Title>{translate("website_analytics")}</Title>
            </BoxItemDetails>
            <BoxItemImage></BoxItemImage>
        </BoxItem>
    </Box>
  )
}

export default Analytics