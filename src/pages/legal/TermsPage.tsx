import React from 'react';
import { motion } from 'framer-motion';

const TermsPage = () => {
  return (
    <div className="pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-green max-w-none">
            <h2>LICENSEE TERMS AND CONDITIONS</h2>
            
            <p>
              These Licensee Terms and Conditions ("Agreement") are entered into as of the date you accepted this Agreement or as of the effective date listed on any Order Form that references this Agreement ("Effective Date"), by and between Beqy AI (Pty) Ltd, a South African company headquartered in Johannesburg ("Beqy"), and the Licensee (as defined below). This Agreement sets forth the terms pursuant to which Licensee will be permitted to purchase, subscribe to, access, or use certain of Beqy's products and services.
            </p>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
              <p className="font-semibold mb-4">
                BY ACCEPTING THIS AGREEMENT, BY CLICKING A BOX INDICATING YOUR ACCEPTANCE, SIGNING AN ORDER FORM (AS DEFINED BELOW) REFERENCING THIS AGREEMENT, USING THE PLATFORM (AS DEFINED BELOW), OR OTHERWISE AFFIRMATIVELY INDICATING YOUR ACCEPTANCE OF THIS AGREEMENT, YOU:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AGREE TO THIS AGREEMENT ON BEHALF OF THE ORGANIZATION, COMPANY, OR OTHER LEGAL ENTITY FOR WHICH YOU ACT ("LICENSEE")</li>
                <li>REPRESENT THAT YOU HAVE THE AUTHORITY TO BIND LICENSEE TO THIS AGREEMENT</li>
              </ul>
              <p className="mt-4 font-semibold">
                IF YOU DO NOT HAVE SUCH AUTHORITY, OR IF YOU DO NOT AGREE WITH THIS AGREEMENT, YOU MUST NOT ACCEPT THIS AGREEMENT AND MAY NOT USE THE PLATFORM.
              </p>
            </div>

            <h3>1. Orders</h3>
            <p>
              This Agreement sets forth the terms and conditions on which Beqy may make available to Licensee the Platform (as defined below), in whole or in part, as expressly identified (a) in an order form signed by Licensee and Beqy that references this Agreement, (b) by Beqy during the sign-up process on the Platform, or (c) in any order details sent electronically to Licensee (each, an "Order Form"). Each Order Form is subject to the terms of, and is deemed incorporated into, this Agreement. Not all of the features or functionality of the Platform may be available at Licensee's subscription level irrespective of whether such feature or functionality and access to such features or functionality may require payment of additional fees or the purchase of additional licenses or access rights.
            </p>

            <h3>2. Access To Technology Platform; Services</h3>
            
            <h4>2.1 Usage Rights</h4>
            <p>
              Subject to the terms and conditions of the Agreement, including any restrictions in the Order Form, Beqy grants to Licensee during the Term a revocable, non-exclusive, non-transferable, non-sublicensable right to access and use Beqy's technology and software platform currently called Beqy for month-end close reconciliation and collaboration (the "Platform"), in all instances solely for its internal business purposes.
            </p>

            <h4>2.2 Services</h4>
            <p>
              Subject to the terms and conditions of the Agreement, Beqy shall provide Licensee with the support services ("Services") described in the Order Form.
            </p>

            <h4>2.3 Restrictions</h4>
            <p>
              Licensee agrees that it shall not, and shall not permit any third party, to:
            </p>
            <ul>
              <li>Sublicense, distribute, sell, use for service bureau use, lease, rent, loan, or otherwise transfer the Platform to any third party</li>
              <li>Modify, adapt, alter, translate, or create derivative works from the Platform, nor use it to create a substitute product</li>
              <li>Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code for the Platform, or use the Platform to create a competitive product</li>
              <li>Remove, alter, cover or obfuscate any copyright notices or other proprietary rights notices included in the Platform</li>
              <li>Otherwise use or copy the Platform except as expressly permitted under Section 2.1</li>
            </ul>
            <p>
              Licensee shall notify Beqy of any unauthorized use or disclosure of the Platform.
            </p>

            <h4>2.4 Reservation of Rights</h4>
            <p>
              Licensee acknowledges that, as between the parties, Beqy owns the Platform, together with its structure, organization, algorithms, code, and derivative works thereof or intellectual property rights associated therein ("Beqy IP"). All rights in and to the Beqy IP not expressly granted to Licensee in this Agreement are reserved by Beqy and its suppliers.
            </p>

            <h4>2.5 Accounts</h4>
            <p>
              To use the Platform, Licensee must register for and maintain an account with Beqy. When registering, Licensee must provide accurate and complete information and promptly update this information. Licensee is responsible for all activities that occur through Licensee's or its authorized user's accounts.
            </p>

            <h3>3. Fees and Payment</h3>

            <h4>3.1 Trials</h4>
            <p>
              Beqy may, in its sole discretion, offer trials or other promotional offers for certain features of the Platform. The trial will be for the period specified in the Order Form ("Trial Period"). Upon expiration of the Trial Period, a paid subscription will automatically begin per the terms of the applicable Order Form.
            </p>

            <h4>3.2 Platform Fees</h4>
            <p>
              Certain features of the Platform require payment of fees. Licensee will pay to Beqy the fees set forth in the Order Form in accordance with the payment schedule set forth therein ("Fees"). All Fees are non-refundable.
            </p>

            <h4>3.3 Payment Terms</h4>
            <p>
              The Fees will be paid via the payment method indicated in the Order Form. All payments must be made in South African Rand (ZAR). Beqy may suspend or terminate access to the Platform for any account for which any amount is due but unpaid. Any amounts not paid when due will accrue interest at one and one-half percent (1½%) per month or the maximum rate permitted by applicable law; whichever is less, from the due date until paid.
            </p>

            <h4>3.4 Online Subscription</h4>
            <p>
              If Licensee purchases a subscription through the Platform (as opposed to a written Order Form between the parties) ("Subscription Service"), Licensee will be automatically billed recurring periodic charges per the terms of the Order Form. The Subscription Service will continue unless and until Licensee or Beqy cancels per the terms of this Agreement.
            </p>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
              <p className="font-semibold">
                LICENSEE'S CANCELLATION MUST BE RECEIVED BEFORE THE RENEWAL DATE IN ORDER TO AVOID CHARGE FOR THE NEXT SUBSCRIPTION PERIOD.
              </p>
            </div>

            <h4>3.5 Taxes</h4>
            <p>
              The Fees exclude, and Licensee will make all payments of the Fees to Beqy free and clear of, all applicable sales, use, and other taxes and all applicable export and import fees, customs duties and similar charges.
            </p>

            <h3>4. Warranty Disclaimer</h3>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
              <p className="uppercase">
                THE PLATFORM AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT ANY REPRESENTATIONS, WARRANTIES OR COVENANTS, WHETHER STATUTORY, EXPRESS, IMPLIED, BY COURSE OF COMMUNICATION OR DEALING, OR OTHERWISE WITH RESPECT TO THE PLATFORM OR SERVICES.
              </p>
            </div>

            <h3>5. Indemnification</h3>
            <p>
              Beqy will defend at its own expense any third party action against Licensee based upon a claim that the Platform or Services infringe or misappropriate any patents, copyrights or trade secrets of a third party.
            </p>

            <h3>6. Limitation of Liability</h3>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
              <p className="uppercase">
                IN NO EVENT WILL EITHER PARTY BE LIABLE FOR ANY CONSEQUENTIAL, INDIRECT, EXEMPLARY, SPECIAL, OR INCIDENTAL DAMAGES, INCLUDING WITHOUT LIMITATION ANY LOST DATA, LOST PROFITS AND COSTS OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES.
              </p>
            </div>

            <h3>7. Confidentiality & Data</h3>
            <p>
              Each party agrees to maintain the confidentiality of the other party's Confidential Information and to use such Confidential Information only as permitted under this Agreement.
            </p>

            <h3>8. Term and Termination</h3>
            <p>
              The Agreement will commence on the Effective Date and will continue until terminated in accordance with the terms of this Agreement or the applicable Order Form.
            </p>

            <h3>9. General</h3>
            <p>
              This Agreement constitutes the entire agreement between the parties regarding the subject hereof and supersedes all prior or contemporaneous agreements, understandings, and communication, whether written or oral.
            </p>

            <div className="mt-8 text-sm text-gray-600">
              Last updated: July 3, 2024
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;