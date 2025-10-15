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

const ReturnPolicy: React.FC = () => {
  const { formatPrice } = usePrice();

  return (
    <Container>
      <Title>Digital Service Return Policy</Title>
      
      <Section>
        <Paragraph><strong>Last updated:</strong> {new Date().toLocaleDateString()}</Paragraph>
      </Section>

      <Section>
        <Paragraph>
          {COMPANY_INFO.name} understands that digital products require different return considerations than physical items. 
          This policy explains our approach to email management service returns and refunds for digital business solutions.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Important Notice: Digital Products Policy</SectionTitle>
        <Paragraph>
          Our email management services are digital products delivered instantly upon purchase. Due to the nature of digital 
          business solutions, traditional "returns" do not apply. Instead, we offer a satisfaction guarantee and refund policy 
          as outlined below.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>1. No Physical Returns Required</SectionTitle>
        <Paragraph>
          Since our email management services are delivered digitally through your online account, there are no physical items to return. 
          All service materials, including tools, templates, and resources, are accessed through our secure platform.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. 7-Day Satisfaction Guarantee</SectionTitle>
        <Paragraph>
          Instead of returns, we offer a 7-day satisfaction guarantee on all email management service purchases. You may request a full refund 
          within 7 days of purchase if you have used less than 25% of the service features.
        </Paragraph>
        <Paragraph>
          This policy ensures you have adequate time to evaluate the service quality while protecting our intellectual property 
          and the value we provide to all users.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. Refund Request Process</SectionTitle>
        <Paragraph>
          To request a refund for your email management service:
        </Paragraph>
        <Paragraph>
          1. Email us at {CONTACT_INFO.email} within 7 days of purchase<br/>
          2. Include your order number and registered email address<br/>
          3. Provide a brief reason for your refund request<br/>
          4. Confirm that you have used less than 25% of the service features<br/>
          5. Our team will review and respond within 24-48 hours
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. What Happens After Refund Approval</SectionTitle>
        <Paragraph>
          Upon refund approval:
        </Paragraph>
        <Paragraph>
          • Your service access will be immediately revoked<br/>
          • Any downloaded materials must be deleted from your devices<br/>
          • Your account will show the service as "Refunded"<br/>
          • Refund will be processed to your original payment method within 5-10 business days<br/>
          • You will receive a confirmation email with refund details
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Non-Refundable Situations</SectionTitle>
        <Paragraph>
          Refunds cannot be processed in these circumstances:
        </Paragraph>
        <Paragraph>
          • More than 7 days have passed since purchase<br/>
          • More than 25% of service features have been accessed<br/>
          • Service completion certificate has been downloaded<br/>
          • Downloadable service materials have been accessed<br/>
          • Technical issues on your end (device compatibility, internet connection)<br/>
          • Change of mind after substantial service usage
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Alternative Solutions</SectionTitle>
        <Paragraph>
          Before requesting a refund, consider these options:
        </Paragraph>
        <Paragraph>
          • Contact support for technical assistance with service access<br/>
          • Request a service credit to switch to a different email management service<br/>
          • Access our user community for additional support<br/>
          • Review our service preview materials to set proper expectations<br/>
          • Schedule a consultation with our support team
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Service Credit Option</SectionTitle>
        <Paragraph>
          If you're not satisfied with your current service but would like to try a different email management service from our collection, 
          we may offer a service credit instead of a refund. This credit can be applied to any service of equal or lesser value.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Lifetime Access Guarantee</SectionTitle>
        <Paragraph>
          For services you choose to keep, we guarantee lifetime access to your purchased content, including all future updates 
          and improvements. This ensures ongoing value for your investment in email management solutions.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>9. Dispute Resolution</SectionTitle>
        <Paragraph>
          If you disagree with our refund decision, you may appeal by contacting our director at  {CONTACT_INFO.email} with "REFUND APPEAL" in the subject line. All appeals are reviewed personally and responded to within 5 business days.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>10. Contact Information</SectionTitle>
        <Paragraph>
          For refund requests or questions about this policy:
        </Paragraph>
        <Paragraph>
      
          Company name: {COMPANY_INFO.owner}<br/>
          Email: {CONTACT_INFO.email}<br/>
          Phone: {CONTACT_INFO.phoneFormatted}<br/>
          Address: {COMPANY_INFO.address}<br/>
          Support Hours: Monday-Friday, 9 AM - 5 PM GMT
        </Paragraph>
        <Paragraph>
          <strong>Emergency Contact:</strong> For urgent refund issues, include "URGENT" in your email subject line for priority handling.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default ReturnPolicy;
