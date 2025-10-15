import React from 'react';
import styled from 'styled-components';
import { usePrice } from '../hooks/usePrice';
import { CONTACT_INFO, COMPANY_INFO } from '../config/constants';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 60px;
  color: var(--minimal-gray-900);
  line-height: 1.6;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: var(--minimal-gray-900);
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: var(--minimal-gray-900);
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const TermsConditions: React.FC = () => {
  const { formatPrice } = usePrice();

  return (
    <Container>
      <Title>Terms & Conditions</Title>
      
      <Section>
        <Paragraph><strong>Last updated:</strong> {new Date().toLocaleDateString()}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>1. Acceptance of Terms</SectionTitle>
        <Paragraph>
          By accessing and using {COMPANY_INFO.name} email management platform and services, you accept and agree to be bound by 
          the terms and provisions of this agreement. These terms apply to all email management services, digital tools, and 
          related services. If you do not agree to these terms, please do not use our services.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Company Information</SectionTitle>
        <Paragraph>
          This email management platform is operated by Elariosso Digital. 
          Our contact information:
        </Paragraph>
        <Paragraph>
         
          Email: {CONTACT_INFO.email}<br/>
          Phone: {CONTACT_INFO.phoneFormatted}<br/>
          Address: {COMPANY_INFO.address}
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. Email Management Service Pricing</SectionTitle>
        <Paragraph>
          Our email management services are available at the following price points: {formatPrice(6.99)}, {formatPrice(9.99)}, {formatPrice(19.99)}, {formatPrice(29.99)}, {formatPrice(39.99)}, {formatPrice(49.99)}, {formatPrice(59.99)}, {formatPrice(69.99)}, {formatPrice(79.99)}, {formatPrice(89.99)}, and {formatPrice(99.99)}. 
          All prices are in EUR and include applicable taxes. Prices are subject to change without notice.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. Payment and Billing</SectionTitle>
        <Paragraph>
          We accept major credit and debit cards for email service purchases. Your payment information is processed securely through our payment processors using 256-bit SSL encryption.
        </Paragraph>
        <Paragraph>
          <strong>Billing Descriptor:</strong> Charges will appear on your credit card statement as "EMAIL SERVICES" or "EMAIL.MANAGEMENT". 
          This is how the charge will appear on your cardholder's billing statement.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Email Service Access and Delivery</SectionTitle>
        <Paragraph>
          Upon successful payment, you will receive immediate access to your purchased email management services through your account dashboard. 
          Services are delivered digitally and include access to management tools, templates, and lifetime access to updates.
        </Paragraph>
        <Paragraph>
          You will receive an email confirmation with login details and service access instructions within 15 minutes of purchase. 
          If you do not receive access, please check your spam folder or contact our support team.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Service Content and Intellectual Property</SectionTitle>
        <Paragraph>
          All email management service content, including software, templates, documentation, and downloadable materials, are the intellectual property of 
          {COMPANY_INFO.name}. You are granted a personal, non-transferable license to access and use the content 
          for your own business purposes only.
        </Paragraph>
        <Paragraph>
          You may not share, distribute, reproduce, or resell service content. Violation of these terms may result in 
          immediate termination of access without refund.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Refund Policy for Digital Services</SectionTitle>
        <Paragraph>
          Due to the digital nature of our email management services, all sales are final. However, we offer a 7-day satisfaction guarantee. 
          If you are not satisfied with your service purchase, you may request a refund within 7 days of purchase, 
          provided you have used less than 25% of the service features.
        </Paragraph>
        <Paragraph>
          To request a refund, contact our support team with your order number and reason for the refund request. 
          Refunds will be processed to the original payment method within 5-10 business days.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Account Access and Security</SectionTitle>
        <Paragraph>
          You are responsible for maintaining the confidentiality of your account login credentials and for all activities 
          that occur under your account. Sharing account access is prohibited and may result in account termination.
        </Paragraph>
        <Paragraph>
          Service access is provided for your lifetime, but {COMPANY_INFO.name} reserves the right to terminate 
          access for violation of these terms or fraudulent activity.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>9. Service Updates and Modifications</SectionTitle>
        <Paragraph>
          We continuously update our email management services to reflect the latest developments in email technology and digital communication. 
          You will receive access to all service updates and new features at no additional cost for services you have purchased.
        </Paragraph>
        <Paragraph>
          We reserve the right to modify, update, or discontinue services with reasonable notice to existing users.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>10. Limitation of Liability</SectionTitle>
        <Paragraph>
          {COMPANY_INFO.name} provides email management services for business purposes only. We make no guarantees about 
          specific outcomes, business results, or revenue generation from service usage. Results may vary based on 
          individual effort and application of service features.
        </Paragraph>
        <Paragraph>
          Our liability is limited to the amount paid for the specific service in question. We shall not be liable for 
          any direct, indirect, incidental, or consequential damages arising from the use of our services or platform.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>11. Governing Law</SectionTitle>
        <Paragraph>
          These terms and conditions are governed by and construed in accordance with 
          the laws of the State of Wyoming, United States. Any disputes will be resolved in the courts of Wyoming.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>12. Contact Information</SectionTitle>
        <Paragraph>
          For questions about these Terms & Conditions or service-related inquiries, please contact us at:
        </Paragraph>
        <Paragraph>
       
          Company name: {COMPANY_INFO.owner}<br />
          Address: {COMPANY_INFO.address}<br />
          Phone: {CONTACT_INFO.phoneFormatted}<br />
          Email: {CONTACT_INFO.email}<br />
          Support Hours: Monday-Friday, 9 AM - 6 PM GMT
        </Paragraph>
      </Section>
    </Container>
  );
};

export default TermsConditions;
