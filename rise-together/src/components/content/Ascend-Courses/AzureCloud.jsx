import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Util.css";
function AzureCloud() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content">
        <Link to="/" className="">
          {" "}
          <span>
            <i className="fa-solid fa-arrow-left"></i>
          </span>
        </Link>
        <h2>AsCEnD Azure Cloud</h2>
        <h3>AsCEnD Azure Assessment</h3>
        <div className="kyt-questions">
          <div className="question">
            <p>
              Q1. The ________ cloud model offers organizations the most
              ownership and control.
            </p>
            <p className="answer">Answer: Private</p>
          </div>

          <div className="question">
            <p>Q2. When should you 'scale up' your deployment?</p>
            <p className="answer">
              Answer: When your application or service requires a more powerful
              CPU or more memory to run faster
            </p>
          </div>

          <div className="question">
            <p>
              Q3. Which of the following Azure services is NOT part of the
              compute services?
            </p>
            <p className="answer">Answer: Virtual Networks</p>
          </div>

          <div className="question">
            <p>
              Q4. ________ is owned and operated by the organization that uses
              the resources from that cloud.
            </p>
            <p className="answer">Answer: Private cloud</p>
          </div>

          <div className="question">
            <p>
              Q5. __________ refers to the practice of paying up-front for a
              product or service (i.e., infrastructure) over time.
            </p>
            <p className="answer">Answer: Operational expenditure</p>
          </div>

          <div className="question">
            <p>
              Q6. What does it mean if a service is in Private Preview mode?
            </p>
            <p className="answer">
              Answer: You have to apply to get selected to use that service
            </p>
          </div>

          <div className="question">
            <p>
              Q7. Which of the following is an example of an Azure application
              platform?
            </p>
            <p className="answer">Answer: Azure App Service</p>
          </div>

          <div className="question">
            <p>
              Q8. __________ is used primarily to allow multiple organizations
              to share its resources and services.
            </p>
            <p className="answer">Answer: Public cloud</p>
          </div>

          <div className="question">
            <p>
              Q9. What does it mean if a service is in General Availability (GA)
              mode?
            </p>
            <p className="answer">
              Answer: Anyone can use the service for any reason
            </p>
          </div>

          <div className="question">
            <p>
              Q10. Why is Azure App Services considered Platform as a Service?
            </p>
            <p className="answer">
              Answer: You give Azure the code and the configuration, and you
              have no access to underlying hardware
            </p>
          </div>

          <div className="question">
            <p>
              Q11. Which of the following ensures data-residency and compliance
              needs are met for customers who need to keep data in specific
              locations?
            </p>
            <p className="answer">Answer: Geographies</p>
          </div>

          <div className="question">
            <p>
              Q12. Azure claims there are approximately 54 regions. But when I
              create my account, I can only see 30 of 54. Why?
            </p>
            <p className="answer">
              Answer: Some regions like Azure Germany, Azure China, and Azure
              Government require separate accounts to access.
            </p>
          </div>

          <div className="question">
            <p>
              Q13. A service or solution that experiences little to no downtime
              for an extended period is considered to be?
            </p>
            <p className="answer">Answer: Highly available</p>
          </div>

          <div className="question">
            <p>
              Q14. Leveraging cloud services allows organizations to take
              advantage of ________.
            </p>
            <p className="answer">Answer: All of the above</p>
          </div>

          <div className="question">
            <p>
              Q15. Where do you find virtual machine images provided by
              third-party companies within the Azure Portal?
            </p>
            <p className="answer">Answer: In the Azure Marketplace</p>
          </div>

          <div className="question">
            <p>
              Q16. Financially speaking, one of the benefits of using cloud
              computing over hosting applications yourself is?
            </p>
            <p className="answer">
              Answer: The tax and cash flow benefits of using Operational
              Expenditure (OpEx) instead of Capital Expenditure (CapEx).
            </p>
          </div>

          <div className="question">
            <p>
              Q17. Which of Azure's architectural components allows you to
              specify exactly which data center in a region a virtual machine is
              deployed?
            </p>
            <p className="answer">Answer: Availability Zones</p>
          </div>

          <div className="question">
            <p>
              Q18. Even without paying for support, can you still open a support
              ticket if you encounter a problem?
            </p>
            <p className="answer">Answer: TRUE</p>
          </div>

          <div className="question">
            <p>
              Q19. Deploying an app can be done directly at what level of
              physical granularity?
            </p>
            <p className="answer">Answer: Region</p>
          </div>

          <div className="question">
            <p>
              Q20. How many minutes per month of downtime is 99.99%
              availability?
            </p>
            <p className="answer">Answer: 4 minutes</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AzureCloud;
