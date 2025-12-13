# 12-Month Financial Model - Spreadsheet Structure
**Team:** Vertex  
**Product:** TeamLearn  
**Model Period:** January 2026 - December 2026  
**Currency:** USD  

---

## **Model Overview**

This 12-month financial model projects revenue, expenses, and cash flow for TeamLearn's first year post-MVP launch. Based on validated metrics from Experiment 1 (12.5% conversion) and interview data.

## **Key Assumptions**

### **A. Revenue Assumptions**
1. **Pricing Model:** Freemium
   - Free: Basic features (1 project, 5 team members)
   - Premium: $8.33/month ($100 annually)
   - Team: $5/user/month (min 5 users)

2. **Conversion Rates:**
   - Visitor → Signup: 12.5% (validated)
   - Signup → Free User: 80%
   - Free → Premium: 5% (Month 1-3), 8% (Month 4-6), 12% (Month 7-12)
   - Monthly Churn: 3% (Premium), 8% (Free)

3. **Traffic Growth:**
   - Month 1: 1,000 visitors
   - Month 2: 2,000 visitors
   - Month 3-6: 15% MoM growth
   - Month 7-12: 10% MoM growth

### **B. Cost Assumptions**
1. **Development Costs:**
   - Backend Infrastructure: $500/month
   - Frontend Hosting: $200/month
   - Third-party APIs: $300/month

2. **Personnel Costs:**
   - Month 7: Hire first developer @ $4,000/month
   - Month 10: Hire community manager @ $3,000/month

3. **Marketing Costs:**
   - Content Marketing: $500/month
   - Paid Acquisition: $1,000/month (starting Month 4)
   - University Partnerships: $300/month

---

## **Spreadsheet Structure**

### **SHEET 1: EXECUTIVE SUMMARY**
KEY HIGHLIGHTS (YEAR 1)

• Revenue Growth: $0 → $150,700 (+∞%)
• Paying Users: 0 → 1,102 (+∞%)
• MRR: $0 → $2,999 (+∞%)
• Cash Burn: $76,902 (Year 1 loss)
• Runway: 9 months with $50k starting cash

MONTHLY SNAPSHOT

Metric	Month 1	Month 6	Month 12	Year Total
Total Visitors	1,000	4,000	7,000	52,000
Total Users	100	1,200	3,500	-
Premium Users	5	56	259	1,102
Team Users	0	10	50	205
MRR	$42	$608	$2,999	$12,558
ARR	$500	$7,300	$36,000	$150,700
CAC	$0	$75	$44	$79
LTV	$244	$244	$244	$244
LTV:CAC	∞	3.3:1	5.5:1	3.1:1
Monthly Burn	($2,058)	($3,352)	($11,481)	($76,902)
Cash Balance	$47,942	$33,378	($28,103)	-
Runway	23 months	10 months	-	-
text

### **SHEET 2: REVENUE FORECAST**
MONTH-BY-MONTH REVENUE PROJECTION

Month	Visitors	Signups	Free Users	Premium Conv	Premium Users	Team Users	MRR	ARR
Jan	1,000	125	100	5% (5)	5	0	$42	$500
Feb	2,000	250	200	5% (10)	10	0	$83	$1,000
Mar	2,300	288	230	5% (17)	17	2	$158	$1,900
Apr	2,645	331	265	8% (27)	27	5	$267	$3,200
May	3,042	380	304	8% (39)	39	8	$400	$4,800
Jun	4,000	500	400	8% (56)	56	10	$608	$7,300
Jul	4,400	550	440	12% (77)	77	15	$875	$10,500
Aug	4,840	605	484	12% (102)	102	20	$1,183	$14,200
Sep	5,324	666	532	12% (132)	132	25	$1,542	$18,500
Oct	5,856	732	586	12% (168)	168	30	$1,958	$23,500
Nov	6,442	805	644	12% (210)	210	40	$2,442	$29,300
Dec	7,000	875	700	12% (259)	259	50	$2,999	$36,000
TOTAL	52,000	6,500	-	1,102	205	$12,558	$150,700	-
text

### **SHEET 3: EXPENSE FORECAST**
MONTHLY EXPENSE BREAKDOWN

Category	M1-3	M4-6	M7-9	M10-12	Year Total	% of Rev
COGS						
- Infrastructure	$500	$750	$1,000	$1,500	$11,250	7.5%
- Hosting	$200	$300	$400	$600	$4,500	3.0%
- APIs	$300	$450	$600	$900	$6,750	4.5%
- Payment Fees	$4	$22	$55	$108	$570	0.4%
Total COGS	$1,004	$1,522	$2,055	$3,108	$23,070	15.3%
PERSONNEL						
- Developer	$0	$0	$4,000	$4,000	$24,000	15.9%
- Community Mgr	$0	$0	$0	$3,000	$9,000	6.0%
Total Personnel	$0	$0	$4,000	$7,000	$33,000	21.9%
MARKETING						
- Content	$500	$500	$500	$500	$6,000	4.0%
- Paid Ads	$0	$1,000	$1,500	$2,000	$13,500	9.0%
- Univ Events	$300	$300	$300	$300	$3,600	2.4%
Total Marketing	$800	$1,800	$2,300	$2,800	$23,100	15.3%
OPERATIONS						
- Legal	$200	$200	$200	$200	$2,400	1.6%
- Software Tools	$300	$300	$300	$300	$3,600	2.4%
- Contingency	$230	$362	$690	$1,121	$7,230	4.8%
Total Ops	$730	$862	$1,190	$1,621	$13,230	8.8%
MONTHLY TOTAL	$2,534	$4,184	$9,545	$14,529	$92,400	61.3%
text

### **SHEET 4: CASH FLOW & FUNDING**
CASH FLOW STATEMENT

Month	Starting	Revenue	Expenses	Net Flow	Funding	Ending	Runway
Jan	$50,000	$42	($2,534)	($2,492)	$0	$47,508	19.1m
Feb	$47,508	$83	($2,534)	($2,451)	$0	$45,057	17.7m
Mar	$45,057	$158	($2,534)	($2,376)	$0	$42,681	16.8m
Apr	$42,681	$267	($4,184)	($3,917)	$0	$38,764	9.9m
May	$38,764	$400	($4,184)	($3,784)	$0	$34,980	9.2m
Jun	$34,980	$608	($4,184)	($3,576)	$0	$31,404	8.8m
Jul	$31,404	$875	($9,545)	($8,670)	$0	$22,734	2.6m
Aug	$22,734	$1,183	($9,545)	($8,362)	$0	$14,372	1.7m
Sep	$14,372	$1,542	($9,545)	($8,003)	$0	$6,369	0.8m
Oct	$6,369	$1,958	($14,529)	($12,571)	$100,000	$93,798	7.5m
Nov	$93,798	$2,442	($14,529)	($12,087)	$0	$81,711	6.8m
Dec	$81,711	$2,999	($14,529)	($11,530)	$0	$70,181	6.1m
FUNDING ANALYSIS

• Year 1 Cash Requirement: $150,000
• Starting Cash: $50,000 (sweat equity)
• Additional Funding: $100,000 (Month 10)
• Use of Funds: 18-month runway
• Burn Rate: $8,000/month average
• Breakeven: 5,000 users ($500k ARR)
• Next Round: Series A at $1M ARR

text

### **SHEET 5: UNIT ECONOMICS DASHBOARD**
UNIT ECONOMICS SUMMARY

Metric	Month 6	Month 12	Target	Status
CAC	$75	$44	<$100	✅
LTV	$244	$244	>$200	✅
LTV:CAC	3.3:1	5.5:1	>3:1	✅
Payback	10.2m	6.0m	<12m	✅
ARPU	$10.86	$11.57	>$10	✅
Churn	5.0%	3.0%	<5%	✅
GM%	85%	88%	>80%	✅
CAC BY CHANNEL

Channel	CAC	% of Users	Efficiency
University Discord	$35	45%	⭐⭐⭐⭐⭐
Student Subreddits	$65	25%	⭐⭐⭐⭐
Campus Events	$40	15%	⭐⭐⭐⭐⭐
Paid Social	$120	10%	⭐⭐
Referrals	$25	5%	⭐⭐⭐⭐⭐
text

### **SHEET 6: SCENARIO ANALYSIS**
THREE SCENARIOS

Scenario	Key Assumption	Year 1 Revenue	CAC	LTV:CAC	Funding Need
Pessimistic	8% conversion	$96,448	$99	2.5:1	$125,000
Base Case	12.5% conversion	$150,700	$79	3.1:1	$100,000
Optimistic	20% conversion	$241,120	$44	5.5:1	$75,000
BREAK-EVEN ANALYSIS

• Fixed Costs: $8,000/month
• Variable Cost/User: $0.50
• Contribution Margin/User: $7.33
• Breakeven Users: 1,091/month
• Time to Breakeven: Month 18
• Breakeven MRR: $9,091

text

---

## **Key Financial Insights**

1. **Capital Efficiency:** Strong LTV:CAC ratios (40:1+) indicate highly efficient growth potential
2. **Scalability:** Low marginal costs per additional user ($0.50) enables rapid scaling
3. **Funding Timing:** Need $100K investment before Month 10 to avoid cash crunch
4. **Profitability Path:** Achievable within 18 months with current growth assumptions
5. **Risk Factors:** User churn and slower adoption are biggest financial risks

---

## **Recommendations**

1. **Raise $100,000** at $1.2M pre-money valuation (20% dilution)
2. **Hire first developer** at Month 7 (when MRR reaches ~$1,000)
3. **Focus on retention** - reducing churn from 3% to 2% doubles LTV
4. **Experiment with pricing** - test $12/month tier after initial traction
5. **Pursue university partnerships** for bulk licensing (higher ACV, lower CAC)

---

## **Model Updates & Maintenance**

**Update Schedule:**
- Monthly: Update actuals vs. projections
- Quarterly: Review and adjust assumptions
- Annually: Complete model refresh

**Update Triggers:**
- Significant deviation from projections (>20%)
- Major product changes
- Funding events
- Market condition changes

**Prepared by:** Vertex Team  
**Date:** December 23, 2025  
**Version:** 1.0  
**Next Review:** January 31, 2026
