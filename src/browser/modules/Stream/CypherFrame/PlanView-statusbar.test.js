/*
 * Copyright (c) 2002-2019 "Neo4j,"
 * Neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global describe, test, expect */
import React from 'react'
import { render } from '@testing-library/react'
import { PlanView } from './PlanView'

describe('PlanViews', () => {
  describe('PlanView', () => {
    test('displays plan view if it exists', () => {
      // Given
      const props = {
        query: 'MATCH xx0',
        result: {
          summary: {
            plan: {
              dbHits: 'xx0',
              arguments: {},
              children: [],
              operatorType: 'ProduceResults',
              identifiers: ['n']
            }
          }
        }
      }

      // When
      const { getByText } = render(<PlanView {...props} />)

      // Then
      expect(getByText('ProduceResults'))
    })
  })
})