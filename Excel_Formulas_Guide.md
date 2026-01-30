# Labor Wage Tracking System - Excel Formulas Guide

## Column Structure

| Column | Header | Formula/Description |
|--------|--------|-------------------|
| A | Date | Manual entry (DD/MM/YYYY) |
| B | Laborer Name | Dropdown list |
| C | Task Category | Dropdown list |
| D | Task Detail | Dropdown list |
| E | Unit Type | Dropdown list |
| F | Quantity | Manual entry |
| G | Rate per Unit | Manual entry |
| H | Total Earned | `=F2*G2` |
| I | Amount Paid | Manual entry |
| J | Balance Change | `=H2-I2` |
| K | Running Balance | `=SUMIFS($J$2:J2,$B$2:B2,B2)` |
| L | Payment Status | `=IF(K2>0,"Due",IF(K2<0,"Advance","Paid"))` |
| M | Remarks | Manual entry |

## Key Formulas Explained

### 1. Total Earned (Column H)
```excel
=F2*G2
```
Multiplies Quantity × Rate per Unit

### 2. Balance Change (Column J)
```excel
=H2-I2
```
Shows the net change: Total Earned - Amount Paid

### 3. Running Balance (Column K) - CRITICAL FORMULA
```excel
=SUMIFS($J$2:J2,$B$2:B2,B2)
```
This formula:
- Sums all Balance Changes for the specific laborer
- Uses SUMIFS to filter by laborer name
- Shows cumulative balance per person
- Positive = You owe them money
- Negative = They took advance

### 4. Payment Status (Column L)
```excel
=IF(K2>0,"Due",IF(K2<0,"Advance","Paid"))
```
Automatically shows:
- "Due" if balance is positive (you owe money)
- "Advance" if balance is negative (they owe work)
- "Paid" if balance is zero

## Dropdown Lists Setup

### Create these lists on a separate sheet or side area:

**Laborer Names:**
- Ravi Kumar
- Sita Devi
- Mohan Lal
- (Add more as needed)

**Task Categories:**
- Arecanut
- Rice
- Ginger
- House Work
- Maintenance

**Task Details:**
- Tree Cutting
- Husking
- Spraying
- Planting
- Weeding
- Cleaning
- Grass Picking

**Unit Types:**
- Day
- Hour
- Kg
- Quintal
- Tree
- Piece

## How to Set Up Dropdowns in Excel:

1. Select the range for dropdown (e.g., B2:B1000)
2. Go to Data → Data Validation
3. Choose "List" from dropdown
4. Enter source range or type values separated by commas
5. Check "In-cell dropdown"

## Advanced Features

### Filter by Laborer:
Use Excel's Filter feature on the header row to view specific laborer's records.

### Summary by Laborer:
Create a summary table using:
```excel
=SUMIFS(K:K,B:B,"Ravi Kumar")
```

### Monthly Summary:
```excel
=SUMIFS(H:H,A:A,">="&DATE(2024,1,1),A:A,"<"&DATE(2024,2,1))
```

## Usage Examples

### Recording Daily Work:
- Date: 15/01/2024
- Laborer: Ravi Kumar
- Task: Arecanut - Tree Cutting
- Unit: Day, Quantity: 1, Rate: 500
- Total Earned: 500 (auto-calculated)
- Amount Paid: 300
- Running Balance: Shows cumulative amount owed

### Recording Piece-Rate Work (Husking):
- Task: Arecanut - Husking
- Unit: Kg, Quantity: 25, Rate: 15
- Total Earned: 375 (auto-calculated)

### Recording Advance Payment:
- Enter Date and Laborer Name
- Leave Task fields blank or enter "Advance"
- Quantity: 0, Rate: 0
- Total Earned: 0
- Amount Paid: 5000
- Balance will show -5000 (advance taken)