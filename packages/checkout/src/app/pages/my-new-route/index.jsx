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
// import {getAppOrigin} from 'pwa-kit-react-sdk/utils/url'
// import fetch from 'cross-fetch'

const MyNewRoute = () => {



    // fetch(`${getAppOrigin}/mobify/proxy/api/categories/bikes`)
    return <h1 style={{textAlign: 'center', fontSize: '4rem'}}>
        hello new route!
        <Button colorScheme='blue'>Button</Button>
        <Link as={ReactRouterLink} to='/'>Home</Link>
        <Link as={ReactRouterLink} to='/preview'>Preview</Link>
        </h1>
}

export default MyNewRoute
