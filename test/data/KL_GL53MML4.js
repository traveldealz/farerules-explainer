export default {
    expected: {
        issued_until: '2021-07-22',
        advanced_reservation_days: 5,
        min_stay: 4,
        sunday_rule: 'or',
        booking_class: 'G',
        stopover: 'not permitted',
        max_stay: 3,
        travel_period: [
            {
                from: '01-03',
                to: '06-30',
            },
            {
                from: '08-16',
                to: '12-16',
            },
            {
                from: null,
                to: '2022-03-31',
            }  ],
        travel_period_blackout: null
    },
    text: `General notes

BASIC SEASON ECONOMY PROMOTIONAL          G
UNBUNDLED FARES
 APPLIES FOR ROUND TRIP FARES
FOR ADULT

Category 3: Seasonal restrictions

  PERMITTED 03JAN THROUGH 30JUN OR 16AUG THROUGH 16DEC ON
  THE FIRST INTERNATIONAL SECTOR.

Category 4: Flight restrictions

  THE FARE COMPONENT MUST NOT BE ON
      ONE OR MORE OF THE FOLLOWING
        KQ FLIGHT 124
        KQ FLIGHT 128
        KQ FLIGHT 002
        KQ FLIGHT 003.

Category 5: Advanced reservation/ticketing restrictions

  RESERVATIONS FOR ALL SECTORS AND TICKETING ARE REQUIRED AT
  LEAST 5 DAYS BEFORE DEPARTURE.
         NOTE -
          NOTE - DIFFERENCE COULD EXIST BETWEEN THE CRS LAST
          TICKETING DATE AND TTL ROBOT REMARK.
          --- THE MOST RESTRICTIVE DATE PREVAILS ---
          --------------------------------------------------

Category 6: Minimum stay requirements

  TRAVEL FROM TURNAROUND MUST COMMENCE NO EARLIER THAN THE
  FIRST SUN AFTER ARRIVAL AT TURNAROUND
  OR - TRAVEL FROM TURNAROUND MUST COMMENCE NO EARLIER THAN
       4 DAYS AFTER DEPARTURE FROM FARE ORIGIN.

Category 7: Maximum stay requirements

  TRAVEL FROM LAST STOPOVER MUST COMMENCE NO LATER THAN 3
  MONTHS AFTER DEPARTURE FROM FARE ORIGIN.

Category 8: Stopover restrictions

  STOPOVERS NOT PERMITTED ON THE FARE COMPONENT.

Category 9: Transfer restrictions

  ORIGINATING EUROPE -
  IF THE FARE COMPONENT INCLUDES TRAVEL VIA AMS ON
      ONE OR MORE OF THE FOLLOWING
        ANY AF FLIGHT
        ANY KL FLIGHT
      1 TRANSFER PERMITTED IN EACH DIRECTION
        LIMITED TO 1 AT EUR 10.00 AND 1 AT EUR 1.00
          1 IN AMS OUTBOUND AT EUR 10.00
          1 IN AMS INBOUND AT EUR 1.00.
      AND - UNLIMITED TRANSFERS PERMITTED ON THE FARE
                COMPONENT FREE
              FARE BREAK SURFACE SECTORS NOT PERMITTED AND
               EMBEDDED SURFACE SECTORS PERMITTED ON THE
               FARE COMPONENT.
  ORIGINATING EUROPE -
    UNLIMITED TRANSFERS PERMITTED ON THE FARE COMPONENT
      FARE BREAK SURFACE SECTORS NOT PERMITTED AND EMBEDDED
       SURFACE SECTORS PERMITTED ON THE FARE COMPONENT.
         NOTE -
          OR
          AS PER ROUTING REQUIREMENTS

Category 10: Combinability

   END-ON-END NOT PERMITTED. SIDE TRIPS NOT PERMITTED
   APPLICABLE ADD-ON CONSTRUCTION IS ADDRESSED IN
   MISCELLANEOUS PROVISIONS - CATEGORY 23.
  OPEN JAWS
    FARES MAY BE COMBINED ON A HALF ROUND TRIP BASIS
    -TO FORM SINGLE OR DOUBLE OPEN JAWS.
     A MAXIMUM OF TWO INTERNATIONAL FARE COMPONENTS
     PERMITTED.
     MILEAGE OF THE OPEN SEGMENT MUST BE EQUAL/LESS THAN
     MILEAGE OF THE LONGEST FLOWN FARE COMPONENT.
   PROVIDED -
     THE OPEN SEGMENT MUST BE
      -BETWEEN MIDDLE EAST AND AFRICA/BETWEEN AREA 2 AND
       AREA 3.
      -WITHIN GERMANY OR WITHIN RUSSIA OR WITHIN UKRAINE OR
       WITHIN AZERBAIJAN OR WITHIN ARMENIA OR WITHIN GEORGIA
       OR WITHIN BELARUS OR WITHIN MIDDLE EAST OR WITHIN
       AFRICA OR WITHIN AREA 3. COMBINATIONS ARE NOT WITH
     ANY FIRST CLASS UNRESTRICTED/FIRST CLASS SELL-UP RT
     REF/FIRST CLASS EXCURSION/FIRST CLASS PROMOTIONAL/
     ECONOMY SELL-UP RT REF/INSTANT PURCHASE 2ND LEVEL/
     ECONOMY RESTRICTED/PREMIUM ECONOMY SELL-UP RT FLEX/2ND
     LVL PREM ECO INST PURCHASE-TYPE FARES FOR ANY CARRIER
     IN ANY RULE AND TARIFF.
     EXCEPT AS PROVIDED ABOVE THE OPEN SEGMENT MUST BE
      -BETWEEN MIDDLE EAST AND AFRICA/BETWEEN AREA 2 AND
       AREA 3.
      -WITHIN GERMANY OR WITHIN RUSSIA OR WITHIN UKRAINE OR
       WITHIN AZERBAIJAN OR WITHIN ARMENIA OR WITHIN GEORGIA
       OR WITHIN BELARUS OR WITHIN MIDDLE EAST OR WITHIN
       AFRICA OR WITHIN AREA 3.
       COMBINATIONS ARE WITH ANY FARE FOR CARRIER KL/AF WITH
      ANY RULE IN ANY PUBLIC TARIFF OR WITH FARES IN RULE
      3DI4/6DI4/7DI4/9DI4 IN TARIFF
      EUAFRPV - BETWEEN EUROPE-AFRICA.
  ROUND TRIPS/CIRCLE TRIPS
    FARES MAY BE COMBINED ON A HALF ROUND TRIP BASIS
    -TO FORM ROUND TRIPS
    -TO FORM CIRCLE TRIPS
     A MAXIMUM OF TWO INTERNATIONAL FARE COMPONENTS
     PERMITTED.
   PROVIDED -
     COMBINATIONS ARE NOT WITH ANY FIRST CLASS UNRESTRICTED/
     FIRST CLASS SELL-UP RT REF/FIRST CLASS EXCURSION/FIRST
     CLASS PROMOTIONAL/ECONOMY SELL-UP RT REF/INSTANT
     PURCHASE 2ND LEVEL/ECONOMY RESTRICTED/PREMIUM ECONOMY
     SELL-UP RT FLEX/2ND LVL PREM ECO INST PURCHASE-TYPE
     FARES FOR ANY CARRIER IN ANY RULE AND TARIFF.
     COMBINATIONS ARE WITH ANY FARE FOR CARRIER KL/AF WITH
      ANY RULE IN ANY PUBLIC TARIFF OR WITH FARES IN RULE
      3DI4/6DI4/7DI4/9DI4 IN TARIFF
      EUAFRPV - BETWEEN EUROPE-AFRICA.

Category 12: Surcharges

  IF INFANT 0-1 WITHOUT A SEAT.
  OR - CONTRACT BULK INFANT WITHOUT A SEAT 0-1.
  OR - INCLUSIVE TOUR INFANT WITHOUT A SEAT 0-1.
    THERE IS NO CHARGE FOR TRAVEL.
    AND - THERE IS NO CHARGE FOR TRAVEL IN TRAIN EQUIPMENT.
  A SURCHARGE OF EUR 15.00 PER DIRECTION WILL BE ADDED TO
  THE APPLICABLE FARE FOR TRAVEL IN TRAIN EQUIPMENT FOR ANY
  SECTOR BETWEEN NETHERLANDS AND BELGIUM.

Category 14: Travel restrictions

  VALID FOR TRAVEL COMMENCING ON/BEFORE 31MAR 22.

Category 15: Sales restrictions

  TICKETS MUST BE ISSUED ON/BEFORE 22JUL 21.

Category 15: Sales restrictions

  TICKETS MUST BE ISSUED ON KL OR AF AND MAY NOT BE SOLD IN
  VENEZUELA/NIGERIA
  OR - TICKETS MUST BE ISSUED ON KL OR A5 AND MAY NOT BE
       SOLD IN VENEZUELA/NIGERIA
  OR - TICKETS MUST BE ISSUED ON KL OR AM AND MAY NOT BE
       SOLD IN VENEZUELA/NIGERIA
  OR - TICKETS MUST BE ISSUED ON KL OR CM AND MAY NOT BE
       SOLD IN VENEZUELA/NIGERIA
  OR - TICKETS MUST BE ISSUED ON KL OR CZ AND MAY NOT BE
       SOLD IN VENEZUELA/NIGERIA
  OR - TICKETS MUST BE ISSUED ON KL OR DL AND MAY NOT BE
       SOLD IN VENEZUELA/NIGERIA
  OR - TICKETS MUST BE ISSUED ON KL OR JU AND MAY NOT BE
       SOLD IN VENEZUELA/NIGERIA
  OR - TICKETS MUST BE ISSUED ON KL OR KE AND MAY NOT BE
       SOLD IN VENEZUELA/NIGERIA
  OR - TICKETS MUST BE ISSUED ON KL OR KQ AND MAY NOT BE
       SOLD IN VENEZUELA/NIGERIA AND MAY ONLY BE SOLD IN
       BURUNDI/ETHIOPIA/MALAWI/MOZAMBIQUE/RWANDA/SUDAN/
       SOMALIA/SOUTH SUDAN/ZAMBIA/ZIMBABWE
  OR - TICKETS MUST BE ISSUED ON KL OR LG AND MAY NOT BE
       SOLD IN VENEZUELA/NIGERIA
  OR - TICKETS MUST BE ISSUED ON KL OR MF AND MAY NOT BE
       SOLD IN VENEZUELA/NIGERIA
  OR - TICKETS MUST BE ISSUED ON KL OR MK AND MAY NOT BE
       SOLD IN VENEZUELA/NIGERIA
  OR - TICKETS MUST BE ISSUED ON KL OR MH AND MAY NOT BE
       SOLD IN VENEZUELA/NIGERIA
  OR - TICKETS MUST BE ISSUED ON KL OR MU AND MAY NOT BE
       SOLD IN VENEZUELA/NIGERIA
  OR - TICKETS MUST BE ISSUED ON KL OR PX AND MAY NOT BE
       SOLD IN VENEZUELA/NIGERIA
  OR - TICKETS MUST BE ISSUED ON KL OR QV AND MAY NOT BE
       SOLD IN VENEZUELA/NIGERIA
  OR - TICKETS MUST BE ISSUED ON KL OR SB AND MAY NOT BE
       SOLD IN VENEZUELA/NIGERIA
  OR - TICKETS MUST BE ISSUED ON KL OR SV AND MAY NOT BE
       SOLD IN VENEZUELA/NIGERIA
  OR - TICKETS MUST BE ISSUED ON KL OR VS AND MAY NOT BE
       SOLD IN VENEZUELA/NIGERIA
  OR - TICKETS MUST BE ISSUED ON KL OR WF AND MAY NOT BE
       SOLD IN VENEZUELA/NIGERIA

Category 16: Penalties

  CHANGES
    BEFORE DEPARTURE
      CHANGES PERMITTED.
      CHILD/INFANT DISCOUNTS APPLY.
         NOTE -
          A CHANGE IS A ROUTING / DATE / FLIGHT MODIFICATION
          WHEN MORE THAN ONE FARE COMPONENT IS BEING CHANGED
          THE HIGHEST PENALTY OF ALL CHANGED FARE COMPONENTS
          WILL APPLY
                                ////
                    // BEFORE OUTBOUND DEPARTURE //
                                ////
          NEW RESERVATION AND REISSUANCE MUST BE MADE AT THE
          SAME TIME PRIOR TO DEPARTURE OF THE ORIGINALLY
          SCHEDULED FLIGHT. IF CHANGE DOES NOT OCCUR ON THE
          FIRST FARE COMPONENT OF THE JOURNEY NEW FARE
          WILL BE RECALCULATED USING FARES IN EFFECT ON THE
          PREVIOUS TICKETING DATE AND UNDER FOLLOWING
          CONDITIONS
           - IF SAME BOOKING CLASS IS USED NEW FARE MAY BE
             EQUAL OR HIGHER THAN PREVIOUS AND
             A / MUST COMPLY WITH ALL PROVISIONS OF THE
                 ORIGINALLY TICKETED FARE
             B / OR MUST COMPLY WITH ALL PROVISIONS OF THE
                 NEW FARE BEING APPLIED
           - IF A DIFFERENT BOOKING CLASS IS USED NEW FARE
             MAY BE EQUAL OR HIGHER THAN PREVIOUS AND
             A / MUST COMPY WITH ALL PROVISIONS OF THE
                 NEW FARE BEING APPLIED
                        -----------------------
          REISSUE IS PERMITTED WITH ANY BRAND EXCEPT
          ECONOMY STANDARD AND FLEX AND PREMIUM ECO FLEX
                        -----------------------
          NEW RESERVATION AND REISSUANCE MUST BE MADE AT THE
          SAME TIME PRIOR TO DEPARTURE OF THE ORIGINALLY
          SCHEDULED FLIGHT. WHEN CHANGE OCCURS ON THE FIRST
          FARE COMPONENT OF THE JOURNEY ONLY OR ON THE
          FIRST FARE COMPONENT AND OTHER FARE COMPONENT OF
          THE JOURNEY NEW FARE WILL BE RECALCULATED USING
          FARES IN EFFECT ON DATE OF REISSUE AND UNDER
          FOLLOWING CONDITIONS
           - IF SAME BOOKING CLASS IS USED NEW FARE MAY BE
             EQUAL OR HIGHER THAN PREVIOUS AND
             A / MUST COMPLY WITH ALL PROVISIONS OF THE
                 ORIGINALLY TICKETED FARE
             B / OR MUST COMPLY WITH ALL PROVISIONS OF THE
                 NEW FARE BEING APPLIED
           - IF A DIFFERENT BOOKING CLASS IS USED NEW FARE
             MAY BE EQUAL OR HIGHER THAN PREVIOUS AND
             A / MUST COMPLY WITH ALL PROVISIONS OF THE
                 NEW FARE BEING APPLIED
                        -----------------------
          REISSUE IS PERMITTED WITH ANY BRAND EXCEPT
          ECONOMY STANDARD AND FLEX AND PREMIUM ECO FLEX
    CHANGES NOT PERMITTED IN CASE OF NO-SHOW.
         NOTE -
                 //  BEFORE OUTBOUND DEPARTURE  //
                          //  NO SHOW  //
          IN THE EVENT OF NO SHOW - WHEN CHANGES ARE
          REQUESTED AFTER DEPARTURE OF THE ORIGINALLY
          SCHEDULED FLIGHT -  CHANGES ARE NOT PERMITTED AND
          CANCELLATION RULES SHALL APPLY
    AFTER DEPARTURE
      CHANGES PERMITTED.
      CHILD/INFANT DISCOUNTS APPLY.
         NOTE -
          /////
                    // AFTER OUTBOUND DEPARTURE //
                                ////
          NEW RESERVATION / REISSUANCE AND PAYMENT
          OF THE PENALTY MUST BE MADE AT THE SAME TIME
                    -------------------------------
            NEW FARE WILL BE RECALCULATED USING
          FARES IN EFFECT ON THE PREVIOUS TICKETING DATE
          AND UNDER FOLLOWING CONDITIONS
           - IF SAME BOOKING CLASS IS USED NEW FARE MAY BE
             EQUAL OR HIGHER THAN PREVIOUS AND
             A / MUST COMPLY WITH ALL PROVISIONS OF THE
                 ORIGINALLY TICKETED FARE
             B / OR MUST COMPLY WITH ALL PROVISIONS OF THE
                 NEW FARE BEING APPLIED
           - IF A DIFFERENT BOOKING CLASS IS USED NEW FARE
             MAY BE EQUAL OR HIGHER THAN PREVIOUS AND
          UNDER FOLLOWING CONDITIONS
          A / MUST COMPLY WITH ALL PROVISIONS OF THE NEW
              FARE BEING APPLIED
                        -----------------------
          REISSUE IS PERMITTED WITH ANY BRAND EXCEPT
          ECONOMY STANDARD AND FLEX AND PREMIUM ECO FLEX
  CANCELLATIONS
    ANY TIME
      TICKET IS NON-REFUNDABLE IN CASE OF CANCEL.
      TICKET IS NON-REFUNDABLE IN CASE OF NO-SHOW.
         NOTE -
          ANY TIME
          CANCELLATIONS RULES APPLY BY FARE COMPONENT
          WHEN COMBINING A REFUNDABLE TICKET WITH A
          NON REFUNDABLE TICKET PROVISIONS WILL APPLY
          AS FOLLOWS
             - THE AMOUNT PAID ON THE REFUNDABLE FARE
               COMPONENT WILL BE REFUNDED UPON PAYMENT
               OF THE PENALTY AMOUNT IF APPLICABLE
             - THE AMOUNT PAID ON THE NON REFUNDABLE
               FARE COMPONENT WILL NOT BE REFUNDED
          - FOR NON REFUNDABLE TICKETS THE YQ/YR CARRIER
          IMPOSED SURCHARGE WILL NOT BE REFUNDED

Category 19: Discounts

  ACCOMPANIED CHILD 2-11. ID REQUIRED - CHARGE 75 PERCENT OF
    THE FARE.
        TICKET DESIGNATOR - CH AND PERCENT OF DISCOUNT.
    MUST BE ACCOMPANIED ON ALL FLIGHTS IN SAME COMPARTMENT
      BY ADULT 18 OR OLDER.
  INFANT UNDER 2 WITH A SEAT. ID REQUIRED - CHARGE 75
        PERCENT OF THE FARE.
             TICKET DESIGNATOR - CH AND PERCENT OF DISCOUNT.
         MUST BE ACCOMPANIED ON ALL FLIGHTS IN SAME
           COMPARTMENT BY ADULT 18 OR OLDER.
  1ST INFANT UNDER 2 WITHOUT A SEAT - CHARGE 10 PERCENT OF
         THE FARE.
             TICKET DESIGNATOR - IN AND PERCENT OF DISCOUNT.
         MUST BE ACCOMPANIED ON ALL FLIGHTS IN SAME
           COMPARTMENT BY ADULT 18 OR OLDER.
         NOTE -
          --------------------------------------------------
          THE AGE LIMITS REFERRED TO IN THIS RULE SHALL BE
          THOSE IN EFFECT ON THE DATE OF COMMENCEMENT
          OF TRAVEL.
          EXCEPTION - INFANTS WHO REACH THEIR 2ND
          BIRTHDAY DURING THEIR TRAVEL WILL BE REQUIRED
          TO OCCUPY A SEAT ON THE OUTBOUND AND INBOUND
          FLIGHT.
          THE CHILD FARE NEEDS TO BE APPLIED FOR THE WHOLE
          JOURNEY.
          --------------------------------------------------

Category 23: Miscellaneous Fare Tags

  THIS FARE MUST NOT BE USED AS THE HIGH OR THE LOW FARE
  WHEN CALCULATING A DIFFERENTIAL. THIS FARE MUST NOT BE
  USED AS THE THROUGH FARE WHEN PRICING A FARE COMPONENT
  WITH A DIFFERENTIAL.
         NOTE -
          IN CASE OF CHANGE OF POINT OF DEPARTURE OR
          PARTIAL USE OF THE TICKET BY THE PASSENGER FOR
          THE ABOVE-MENTIONED CHANGE THE PASSENGER WILL BE
          CHARGED A FIXED FARE COMPLEMENT OF 500EUR ALL
          TAXES INCLUDED.
          THIS APPLIES ONLY ON DAY OF TRAVEL AT THE AIRPORT.

Category 31: Voluntary changes

  IN THE EVENT OF CHANGES TO TICKETED FLIGHTS
   BEFORE DEPARTURE OF JOURNEY - APPLIES WITHIN TKT VALIDITY
     NO CHARGE OR HIGHEST FEE OF ALL CHANGED FARE
     COMPONENTS- CATEGORY 19 DISCOUNTS APPLY AND
      REPRICE USING FARES IN EFFECT WHEN TKT WAS ISSUED
       PROVIDED ALL OF THE FOLLOWING CONDITIONS ARE MET-
       1. NO CHANGE TO 1ST FARE COMPONENT
       2. SAME FARE ON 1ST FARE COMPONENT IS USED
       3. CHANGE IS BEFORE ORIGINAL SCHEDULED FLIGHT
       4. AF/KL ANY FARE TYPE EXCEPT XEX/XBN/XPS/ERR/ZRF/ZSX
       ARE USED
       5. NEW TKT HAS EQUAL OR HIGHER VALUE THAN PREVIOUS
       TKT
       6. ALL RULE AND BOOKING CODE PROVISIONS ARE MET
       7. ADV RES IS MEASURED FROM ORIGINAL TKT DATE TO
       DEPARTURE OF PRICING UNIT
      OR -
      REPRICE USING FARES IN EFFECT TODAY
       PROVIDED ALL OF THE FOLLOWING CONDITIONS ARE MET-
       1. CHANGE IS BEFORE ORIGINAL SCHEDULED FLIGHT
       2. AF/KL ANY FARE TYPE EXCEPT XEX/XBN/XPS/ERR/ZRF/ZSX
       ARE USED
       3. NEW TKT HAS EQUAL OR HIGHER VALUE THAN PREVIOUS
       TKT
       4. ADV RES IS MEASURED FROM REISSUE DATE TO DEPARTURE
       OF PRICING UNIT
   REFUND VIA ORIGINAL FORM OF PAYMENT
   ENDORSEMENT BOX- HIGHER NON-REF AMT AND NEW ENDORSEMENTS.
  OR -
   BEFORE DEPARTURE OF JOURNEY - APPLIES WITHIN TKT VALIDITY
    CHANGES NOT PERMITTED/REFUND TKT-ANY REMAINING AMT WILL
    APPLY TO NEW TKT
     PROVIDED ALL OF THE FOLLOWING CONDITIONS ARE MET-
     1. NO CHANGE TO
     2. CHANGE IS AFTER ORIGINAL SCHEDULED FLIGHT.
  OR -
   AFTER DEPARTURE OF JOURNEY - APPLIES WITHIN TKT VALIDITY
     NO CHARGE OR HIGHEST FEE OF ALL CHANGED FARE
     COMPONENTS- CATEGORY 19 DISCOUNTS APPLY AND
      REPRICE USING FARES IN EFFECT WHEN TKT WAS ISSUED
       PROVIDED ALL OF THE FOLLOWING CONDITIONS ARE MET-
       1. FULLY FLOWN FARE NOT REPRICED TO FURTHER POINT
       2. AF/KL ANY FARE TYPE EXCEPT XEX/XBN/XPS/ERR/ZRF/ZSX
       ARE USED
       3. NEW TKT HAS EQUAL OR HIGHER VALUE THAN PREVIOUS
       TKT
       4. ALL RULE AND BOOKING CODE PROVISIONS ARE MET
       5. ADV RES IS MEASURED FROM ORIGINAL TKT DATE TO
       DEPARTURE OF PRICING UNIT
   REFUND VIA ORIGINAL FORM OF PAYMENT
   ENDORSEMENT BOX- HIGHER NON-REF AMT AND NEW ENDORSEMENTS.

Category 33: Voluntary cancellations

  FARE IS NONREFUNDABLE BEFORE DEPARTURE OF JOURNEY.
  IF MIX OF PER FARE COMPONENT AND PER PRICING UNIT
   CALCULATE EACH AS PER PRICING UNIT AND COLLECT HIGHEST.
  REFUND REQUEST MUST BE LESS THAN ONE YEAR AFTER TICKET
   ISSUANCE.
  REPRICE USING EQUAL OR HIGHER RBD.
  OR -
  FARE IS NONREFUNDABLE AFTER DEPARTURE OF JOURNEY.
  IF MIX OF PER FARE COMPONENT AND PER PRICING UNIT
   CALCULATE EACH AS PER PRICING UNIT AND COLLECT HIGHEST.
  REFUND REQUEST MUST BE LESS THAN ONE YEAR AFTER TRAVEL
   COMMENCEMENT DATE IF PARTIALLY USED OR ONE YEAR AFTER
   TICKET ISSUANCE IF TICKET UNUSED.
  REPRICE USING EQUAL OR HIGHER RBD.

Category 50: Application

KLM -  LIGHT FARES - HAND BAGGAGE ONLY
 ZERO BAGGAGE ALLOWANCE MUST BE DISCLOSED TO CUSTOMER
 APPLICATION
   CLASS OF SERVICE
     THESE FARES APPLY FOR ECONOMY CLASS SERVICE.
   TYPES OF TRANSPORTATION
     FARES GOVERNED BY THIS RULE CAN BE USED TO CREATE
     ONE-WAY/ROUND-TRIP/CIRCLE-TRIP/OPEN-JAW JOURNEYS.
 CAPACITY LIMITATIONS
   THE CARRIER SHALL LIMIT THE NUMBER OF PASSENGERS CARRIED
   ON ANY ONE FLIGHT AT FARES GOVERNED BY THIS RULE AND SUCH
   FARES WILL NOT NECESSARILY BE AVAILABLE ON ALL FLIGHTS.
   THE NUMBER OF SEATS WHICH THE CARRIER SHALL MAKE
   AVAILABLE ON A GIVEN FLIGHT WILL BE DETERMINED BY THE
   CARRIERS BEST JUDGMENT`,
}