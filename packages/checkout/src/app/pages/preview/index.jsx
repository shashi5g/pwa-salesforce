/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import { Button } from '@chakra-ui/react'
import {routes as _routes} from '@salesforce/retail-react-app/app/routes'
import { Link } from '@chakra-ui/react';

import { Link as ReactRouterLink } from 'react-router-dom'
import { isEven } from 'is-even';

const MyPreview = () => {
   
    return <div>There are {isEven(3)?'even':'odd'} categories.</div>


  
}


export default MyPreview



