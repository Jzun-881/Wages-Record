class LaborTrackingSystem {
    constructor() {
        this.records = JSON.parse(localStorage.getItem('laborRecords')) || [];
        this.taskDetails = JSON.parse(localStorage.getItem('taskDetails')) || {
            'Arecanut': ['Tree Cutting', 'Husking', 'Spraying', 'Harvesting'],
            'Rice': ['Planting', 'Weeding', 'Harvesting', 'Threshing'],
            'Ginger': ['Planting', 'Weeding', 'Harvesting', 'Processing'],
            'House Work': ['Cleaning', 'Cooking', 'Maintenance', 'General Work'],
            'Maintenance': ['Grass Picking', 'Tool Repair', 'Fence Repair', 'General Maintenance']
        };
        
        this.currentLanguage = localStorage.getItem('currentLanguage') || 'en';
        this.translations = {
            en: {
                title: "🌾 Labor Wage Tracking System",
                subtitle: "Agricultural Work Management",
                filterByLaborer: "Filter by Laborer:",
                allLaborers: "All Laborers",
                totalOutstanding: "Total Outstanding",
                totalAdvances: "Total Advances",
                manageWorkTypes: "🔧 Manage Work Types",
                category: "Category:",
                selectCategory: "Select Category",
                arecanut: "Arecanut",
                rice: "Rice",
                ginger: "Ginger",
                houseWork: "House Work",
                maintenance: "Maintenance",
                addNewCategory: "+ Add New Category",
                newCategoryName: "New Category Name:",
                enterNewCategory: "Enter new category",
                workType: "Work Type:",
                workTypePlaceholder: "e.g., Pruning, Fertilizing",
                addWorkType: "➕ Add Work Type",
                addNewEntry: "Add New Entry",
                date: "Date",
                laborerName: "Laborer Name",
                taskCategory: "Task Category",
                taskDetail: "Task Detail",
                selectTask: "Select Task",
                unitType: "Unit Type",
                selectUnit: "Select Unit",
                day: "Day",
                hour: "Hour",
                kg: "Kg",
                quintal: "Quintal",
                tree: "Tree",
                piece: "Piece",
                quantity: "Quantity",
                ratePerUnit: "Rate per Unit (₹)",
                amountPaidToday: "Amount Paid Today (₹)",
                remarks: "Remarks",
                optionalNotes: "Optional notes",
                addEntry: "Add Entry",
                workRecords: "Work Records",
                laborer: "Laborer",
                unit: "Unit",
                qty: "Qty",
                rate: "Rate",
                earned: "Earned",
                paid: "Paid",
                balance: "Balance",
                status: "Status",
                action: "Action",
                laborerSummary: "Laborer Summary",
                outstandingPayments: "💰 Outstanding Payments",
                advancePayments: "🏦 Advance Payments",
                delete: "Delete",
                due: "Due",
                advance: "Advance",
                paidStatus: "Paid",
                totalEarned: "Total Earned",
                totalPaid: "Total Paid",
                outstanding: "Outstanding",
                advanceTaken: "Advance Taken",
                noOutstandingPayments: "No outstanding payments! 🎉\nAll laborers are up to date.",
                noAdvancePayments: "No advance payments! 💰\nNo laborers have taken advances.",
                selectRemarks: "Select Remarks",
                fullPayment: "Full payment",
                partialPayment: "Partial payment",
                toBePaid: "To be paid",
                advanceGiven: "Advance given",
                repayment2Days: "Repayment after 2 days",
                repayment4Days: "Repayment after 4 days",
                repayment1Week: "Repayment after 1 week",
                repayment2Weeks: "Repayment after 2 weeks",
                emergencyPayment: "Emergency payment",
                bonusPayment: "Bonus payment",
                festivalAdvance: "Festival advance",
                medicalAdvance: "Medical advance",
                customRemarks: "Custom remarks...",
                repaymentNextMonth: "Repayment next month",
                workCompleted: "Work completed",
                halfDayWork: "Half day work",
                overtimePayment: "Overtime payment",
                selectRemarks: "Select Remarks",
                fullPayment: "Full payment",
                partialPayment: "Partial payment",
                toBePaid: "To be paid",
                repayment2Days: "Repayment after 2 days",
                repayment4Days: "Repayment after 4 days",
                repayment1Week: "Repayment after 1 week",
                repayment2Weeks: "Repayment after 2 weeks",
                advanceGiven: "Advance given",
                emergencyPayment: "Emergency payment",
                bonusPayment: "Bonus payment",
                festivalAdvance: "Festival advance",
                medicalAdvance: "Medical advance",
                customRemarks: "Custom remarks...",
                generateReceipt: "Generate Receipt",
                fromDate: "From Date",
                toDate: "To Date",
                selectLaborer: "Select Laborer",
                receiptType: "Receipt Type",
                workSummary: "Work Summary",
                paymentReceipt: "Payment Receipt",
                detailedReport: "Detailed Report",
                companyName: "Company/Farm Name",
                companyNamePlaceholder: "Enter your farm/company name",
                ownerName: "Owner Name",
                ownerNamePlaceholder: "Enter owner name",
                previewReceipt: "Preview Receipt",
                downloadPDF: "Download PDF",
                receiptTitle: "Work & Payment Receipt",
                receiptPeriod: "Period",
                laborerDetails: "Laborer Details",
                workDetails: "Work Details",
                paymentDetails: "Payment Details",
                grandTotal: "Grand Total",
                totalWork: "Total Work Done",
                totalEarnedAmount: "Total Earned Amount",
                totalPaidAmount: "Total Paid Amount",
                balanceAmount: "Balance Amount"
            },
            kn: {
                title: "🌾 ಕಾರ್ಮಿಕ ವೇತನ ಟ್ರ್ಯಾಕಿಂಗ್ ಸಿಸ್ಟಮ್",
                subtitle: "ಕೃಷಿ ಕೆಲಸ ನಿರ್ವಹಣೆ",
                filterByLaborer: "ಕಾರ್ಮಿಕರ ಮೂಲಕ ಫಿಲ್ಟರ್ ಮಾಡಿ:",
                allLaborers: "ಎಲ್ಲಾ ಕಾರ್ಮಿಕರು",
                totalOutstanding: "ಒಟ್ಟು ಬಾಕಿ",
                totalAdvances: "ಒಟ್ಟು ಮುಂಗಡ",
                manageWorkTypes: "🔧 ಕೆಲಸದ ಪ್ರಕಾರಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
                category: "ವರ್ಗ:",
                selectCategory: "ವರ್ಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
                arecanut: "ಅಡಿಕೆ",
                rice: "ಅಕ್ಕಿ",
                ginger: "ಶುಂಠಿ",
                houseWork: "ಮನೆ ಕೆಲಸ",
                maintenance: "ನಿರ್ವಹಣೆ",
                addNewCategory: "+ ಹೊಸ ವರ್ಗ ಸೇರಿಸಿ",
                newCategoryName: "ಹೊಸ ವರ್ಗದ ಹೆಸರು:",
                enterNewCategory: "ಹೊಸ ವರ್ಗವನ್ನು ನಮೂದಿಸಿ",
                workType: "ಕೆಲಸದ ಪ್ರಕಾರ:",
                workTypePlaceholder: "ಉದಾ., ಕತ್ತರಿಸುವುದು, ಗೊಬ್ಬರ ಹಾಕುವುದು",
                addWorkType: "➕ ಕೆಲಸದ ಪ್ರಕಾರ ಸೇರಿಸಿ",
                addNewEntry: "ಹೊಸ ನಮೂದು ಸೇರಿಸಿ",
                date: "ದಿನಾಂಕ",
                laborerName: "ಕಾರ್ಮಿಕರ ಹೆಸರು",
                taskCategory: "ಕೆಲಸದ ವರ್ಗ",
                taskDetail: "ಕೆಲಸದ ವಿವರ",
                selectTask: "ಕೆಲಸವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
                unitType: "ಘಟಕದ ಪ್ರಕಾರ",
                selectUnit: "ಘಟಕವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
                day: "ದಿನ",
                hour: "ಗಂಟೆ",
                kg: "ಕಿಲೋ",
                quintal: "ಕ್ವಿಂಟಲ್",
                tree: "ಮರ",
                piece: "ತುಂಡು",
                quantity: "ಪ್ರಮಾಣ",
                ratePerUnit: "ಪ್ರತಿ ಘಟಕದ ದರ (₹)",
                amountPaidToday: "ಇಂದು ಪಾವತಿಸಿದ ಮೊತ್ತ (₹)",
                remarks: "ಟಿಪ್ಪಣಿಗಳು",
                optionalNotes: "ಐಚ್ಛಿಕ ಟಿಪ್ಪಣಿಗಳು",
                addEntry: "ನಮೂದು ಸೇರಿಸಿ",
                workRecords: "ಕೆಲಸದ ದಾಖಲೆಗಳು",
                laborer: "ಕಾರ್ಮಿಕ",
                unit: "ಘಟಕ",
                qty: "ಪ್ರಮಾಣ",
                rate: "ದರ",
                earned: "ಗಳಿಸಿದ",
                paid: "ಪಾವತಿಸಿದ",
                balance: "ಬ್ಯಾಲೆನ್ಸ್",
                status: "ಸ್ಥಿತಿ",
                action: "ಕ್ರಿಯೆ",
                laborerSummary: "ಕಾರ್ಮಿಕರ ಸಾರಾಂಶ",
                outstandingPayments: "💰 ಬಾಕಿ ಪಾವತಿಗಳು",
                advancePayments: "🏦 ಮುಂಗಡ ಪಾವತಿಗಳು",
                delete: "ಅಳಿಸಿ",
                due: "ಬಾಕಿ",
                advance: "ಮುಂಗಡ",
                paidStatus: "ಪಾವತಿಸಲಾಗಿದೆ",
                totalEarned: "ಒಟ್ಟು ಗಳಿಕೆ",
                totalPaid: "ಒಟ್ಟು ಪಾವತಿ",
                outstanding: "ಬಾಕಿ",
                advanceTaken: "ಮುಂಗಡ ತೆಗೆದುಕೊಂಡಿದೆ",
                noOutstandingPayments: "ಯಾವುದೇ ಬಾಕಿ ಪಾವತಿಗಳಿಲ್ಲ! 🎉\nಎಲ್ಲಾ ಕಾರ್ಮಿಕರು ನವೀಕೃತರಾಗಿದ್ದಾರೆ.",
                noAdvancePayments: "ಯಾವುದೇ ಮುಂಗಡ ಪಾವತಿಗಳಿಲ್ಲ! 💰\nಯಾವುದೇ ಕಾರ್ಮಿಕರು ಮುಂಗಡ ತೆಗೆದುಕೊಂಡಿಲ್ಲ.",
                selectRemarks: "ಟಿಪ್ಪಣಿಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ",
                fullPayment: "ಪೂರ್ಣ ಪಾವತಿ",
                partialPayment: "ಭಾಗಶಃ ಪಾವತಿ",
                toBePaid: "ಪಾವತಿಸಬೇಕಾಗಿದೆ",
                advanceGiven: "ಮುಂಗಡ ನೀಡಲಾಗಿದೆ",
                repayment2Days: "2 ದಿನಗಳ ನಂತರ ಮರುಪಾವತಿ",
                repayment4Days: "4 ದಿನಗಳ ನಂತರ ಮರುಪಾವತಿ",
                repayment1Week: "1 ವಾರದ ನಂತರ ಮರುಪಾವತಿ",
                repayment2Weeks: "2 ವಾರಗಳ ನಂತರ ಮರುಪಾವತಿ",
                emergencyPayment: "ತುರ್ತು ಪಾವತಿ",
                bonusPayment: "ಬೋನಸ್ ಪಾವತಿ",
                festivalAdvance: "ಹಬ್ಬದ ಮುಂಗಡ",
                medicalAdvance: "ವೈದ್ಯಕೀಯ ಮುಂಗಡ",
                customRemarks: "ಕಸ್ಟಮ್ ಟಿಪ್ಪಣಿಗಳು...",
                repaymentNextMonth: "ಮುಂದಿನ ತಿಂಗಳು ಮರುಪಾವತಿ",
                workCompleted: "ಕೆಲಸ ಪೂರ್ಣಗೊಂಡಿದೆ",
                halfDayWork: "ಅರ್ಧ ದಿನದ ಕೆಲಸ",
                overtimePayment: "ಹೆಚ್ಚುವರಿ ಸಮಯದ ಪಾವತಿ",
                selectRemarks: "ಟಿಪ್ಪಣಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
                fullPayment: "ಪೂರ್ಣ ಪಾವತಿ",
                partialPayment: "ಭಾಗಶಃ ಪಾವತಿ",
                toBePaid: "ಪಾವತಿಸಬೇಕು",
                repayment2Days: "2 ದಿನಗಳ ನಂತರ ಮರುಪಾವತಿ",
                repayment4Days: "4 ದಿನಗಳ ನಂತರ ಮರುಪಾವತಿ",
                repayment1Week: "1 ವಾರದ ನಂತರ ಮರುಪಾವತಿ",
                repayment2Weeks: "2 ವಾರಗಳ ನಂತರ ಮರುಪಾವತಿ",
                advanceGiven: "ಮುಂಗಡ ನೀಡಲಾಗಿದೆ",
                emergencyPayment: "ತುರ್ತು ಪಾವತಿ",
                bonusPayment: "ಬೋನಸ್ ಪಾವತಿ",
                festivalAdvance: "ಹಬ್ಬದ ಮುಂಗಡ",
                medicalAdvance: "ವೈದ್ಯಕೀಯ ಮುಂಗಡ",
                customRemarks: "ಕಸ್ಟಮ್ ಟಿಪ್ಪಣಿಗಳು..."
            }
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadSampleData();
        this.renderRecords();
        this.updateSummary();
        this.updateLaborerFilter();
        this.updateLaborerSummary();
        this.updateLaborerDatalist();
        this.renderWorkTags();
        this.updateLanguage(); // Initialize language
        
        // Set today's date as default
        document.getElementById('date').valueAsDate = new Date();
        
        // Add entrance animations
        this.addEntranceAnimations();
    }

    addEntranceAnimations() {
        // Stagger animations for form groups
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach((group, index) => {
            group.style.animationDelay = `${index * 0.1}s`;
        });

        // Animate summary cards
        const summaryCards = document.querySelectorAll('.summary-card');
        summaryCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;
        });
    }

    setupEventListeners() {
        // Form submission
        document.getElementById('entryForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addRecord();
        });

        // Task category change
        document.getElementById('taskCategory').addEventListener('change', (e) => {
            this.updateTaskDetails(e.target.value);
        });

        // Laborer filter
        document.getElementById('laborerFilter').addEventListener('change', (e) => {
            this.filterRecords(e.target.value);
        });

        // New category selection
        document.getElementById('newCategory').addEventListener('change', (e) => {
            const newCategoryInput = document.getElementById('newCategoryName');
            if (e.target.value === 'new') {
                newCategoryInput.style.display = 'block';
                newCategoryInput.focus();
                newCategoryInput.classList.add('slideInUp');
            } else {
                newCategoryInput.style.display = 'none';
                newCategoryInput.classList.remove('slideInUp');
            }
        });

        // Modal close on outside click
        window.addEventListener('click', (e) => {
            const outstandingModal = document.getElementById('outstandingModal');
            const advancesModal = document.getElementById('advancesModal');
            
            if (e.target === outstandingModal) {
                this.closeModal('outstandingModal');
            }
            if (e.target === advancesModal) {
                this.closeModal('advancesModal');
            }
        });

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal.show');
                if (openModal) {
                    this.closeModal(openModal.id);
                }
            }
        });
    }

    addCustomWork() {
        const categorySelect = document.getElementById('newCategory');
        const newCategoryInput = document.getElementById('newCategoryName');
        const workTypeInput = document.getElementById('newWorkType');
        
        let category = categorySelect.value;
        const workType = workTypeInput.value.trim();
        
        if (category === 'new') {
            category = newCategoryInput.value.trim();
            if (!category) {
                this.showError('Please enter a category name');
                return;
            }
        }
        
        if (!category || !workType) {
            this.showError('Please select a category and enter a work type');
            return;
        }
        
        // Add to taskDetails
        if (!this.taskDetails[category]) {
            this.taskDetails[category] = [];
        }
        
        if (!this.taskDetails[category].includes(workType)) {
            this.taskDetails[category].push(workType);
            this.saveTaskDetails();
            this.renderWorkTags();
            this.updateTaskCategoryOptions();
            
            // Success animation
            const button = document.querySelector('.add-work-btn');
            button.classList.add('success-animation');
            setTimeout(() => button.classList.remove('success-animation'), 600);
            
            // Clear inputs
            workTypeInput.value = '';
            newCategoryInput.value = '';
            newCategoryInput.style.display = 'none';
            categorySelect.value = '';
            
            this.showSuccess(`Added "${workType}" to ${category} category!`);
        } else {
            this.showError('This work type already exists in the selected category');
        }
    }

    removeCustomWork(category, workType) {
        if (confirm(`Remove "${workType}" from ${category}?`)) {
            this.taskDetails[category] = this.taskDetails[category].filter(work => work !== workType);
            
            // Remove category if empty
            if (this.taskDetails[category].length === 0) {
                delete this.taskDetails[category];
            }
            
            this.saveTaskDetails();
            this.renderWorkTags();
            this.updateTaskCategoryOptions();
            this.showSuccess(`Removed "${workType}" from ${category}`);
        }
    }

    renderWorkTags() {
        const container = document.getElementById('workTags');
        container.innerHTML = '';
        
        Object.entries(this.taskDetails).forEach(([category, works]) => {
            works.forEach((work, index) => {
                const tag = document.createElement('div');
                tag.className = 'work-tag';
                tag.style.animationDelay = `${index * 0.1}s`;
                tag.innerHTML = `
                    <span class="category">${category}</span>
                    <span>${work}</span>
                    <button class="remove-work" onclick="laborSystem.removeCustomWork('${category}', '${work}')" title="Remove">×</button>
                `;
                container.appendChild(tag);
            });
        });
    }

    updateTaskCategoryOptions() {
        const categorySelect = document.getElementById('taskCategory');
        const currentValue = categorySelect.value;
        
        categorySelect.innerHTML = '<option value="">Select Category</option>';
        Object.keys(this.taskDetails).forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            if (category === currentValue) option.selected = true;
            categorySelect.appendChild(option);
        });
    }

    saveTaskDetails() {
        localStorage.setItem('taskDetails', JSON.stringify(this.taskDetails));
    }

    showSuccess(message) {
        this.showNotification(message, 'success');
    }

    showError(message) {
        this.showNotification(message, 'error');
    }

    showNotification(message, type) {
        // Remove existing notifications
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 1000;
            animation: slideInRight 0.5s ease-out;
            background: ${type === 'success' ? '#28a745' : '#dc3545'};
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideInLeft 0.5s ease-out reverse';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }

    showOutstandingDetails() {
        const balances = this.getLaborerBalances();
        const outstandingLaborers = Object.entries(balances).filter(([name, balance]) => balance > 0);
        
        const modal = document.getElementById('outstandingModal');
        const listContainer = document.getElementById('outstandingList');
        
        if (outstandingLaborers.length === 0) {
            listContainer.innerHTML = `<div class="no-data">${this.getTranslation('noOutstandingPayments')}</div>`;
        } else {
            listContainer.innerHTML = outstandingLaborers
                .sort((a, b) => b[1] - a[1]) // Sort by amount descending
                .map(([laborer, balance], index) => {
                    const totalEarned = this.records
                        .filter(record => record.laborerName === laborer)
                        .reduce((sum, record) => sum + record.totalEarned, 0);
                    
                    const totalPaid = this.records
                        .filter(record => record.laborerName === laborer)
                        .reduce((sum, record) => sum + record.amountPaid, 0);
                    
                    return `
                        <div class="detail-item outstanding" style="animation-delay: ${index * 0.1}s">
                            <div class="laborer-info">
                                <div class="laborer-name">${laborer}</div>
                                <div class="laborer-details">
                                    ${this.getTranslation('earned')}: ₹${totalEarned} | ${this.getTranslation('paid')}: ₹${totalPaid}
                                </div>
                            </div>
                            <div class="amount-info">
                                <div class="amount outstanding">₹${balance}</div>
                                <div class="amount-label">${this.getTranslation('outstanding')}</div>
                            </div>
                        </div>
                    `;
                }).join('');
        }
        
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    showAdvancesDetails() {
        const balances = this.getLaborerBalances();
        const advanceLaborers = Object.entries(balances).filter(([name, balance]) => balance < 0);
        
        const modal = document.getElementById('advancesModal');
        const listContainer = document.getElementById('advancesList');
        
        if (advanceLaborers.length === 0) {
            listContainer.innerHTML = `<div class="no-data">${this.getTranslation('noAdvancePayments')}</div>`;
        } else {
            listContainer.innerHTML = advanceLaborers
                .sort((a, b) => a[1] - b[1]) // Sort by amount ascending (most negative first)
                .map(([laborer, balance], index) => {
                    const totalEarned = this.records
                        .filter(record => record.laborerName === laborer)
                        .reduce((sum, record) => sum + record.totalEarned, 0);
                    
                    const totalPaid = this.records
                        .filter(record => record.laborerName === laborer)
                        .reduce((sum, record) => sum + record.amountPaid, 0);
                    
                    const advanceAmount = Math.abs(balance);
                    
                    return `
                        <div class="detail-item advance" style="animation-delay: ${index * 0.1}s">
                            <div class="laborer-info">
                                <div class="laborer-name">${laborer}</div>
                                <div class="laborer-details">
                                    ${this.getTranslation('earned')}: ₹${totalEarned} | ${this.getTranslation('paid')}: ₹${totalPaid}
                                </div>
                            </div>
                            <div class="amount-info">
                                <div class="amount advance">₹${advanceAmount}</div>
                                <div class="amount-label">${this.getTranslation('advanceTaken')}</div>
                            </div>
                        </div>
                    `;
                }).join('');
        }
        
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        const modalContent = modal.querySelector('.modal-content');
        
        modal.classList.add('modal-fade-out');
        modalContent.classList.add('modal-content-slide-out');
        
        setTimeout(() => {
            modal.classList.remove('show', 'modal-fade-out');
            modalContent.classList.remove('modal-content-slide-out');
            document.body.style.overflow = 'auto';
        }, 400);
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'en' ? 'kn' : 'en';
        localStorage.setItem('currentLanguage', this.currentLanguage);
        this.updateLanguage();
        this.showSuccess(this.currentLanguage === 'en' ? 'Language changed to English' : 'ಭಾಷೆಯನ್ನು ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ');
    }

    updateLanguage() {
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (this.translations[this.currentLanguage][key]) {
                if (element.tagName === 'INPUT' && element.type === 'text') {
                    element.placeholder = this.translations[this.currentLanguage][key];
                } else {
                    element.textContent = this.translations[this.currentLanguage][key];
                }
            }
        });

        // Update language toggle button
        const langIcon = document.getElementById('langIcon');
        const langText = document.getElementById('langText');
        
        if (this.currentLanguage === 'en') {
            langIcon.textContent = '🇮🇳';
            langText.textContent = 'ಕನ್ನಡ';
        } else {
            langIcon.textContent = '🇬🇧';
            langText.textContent = 'English';
        }

        // Update select options
        this.updateSelectOptions();
        
        // Update table headers and content
        this.renderRecords();
        this.updateLaborerSummary();
    }

    updateSelectOptions() {
        // Update category options
        const categorySelects = ['taskCategory', 'newCategory'];
        categorySelects.forEach(selectId => {
            const select = document.getElementById(selectId);
            if (select) {
                const options = select.querySelectorAll('option[data-lang-key]');
                options.forEach(option => {
                    const key = option.getAttribute('data-lang-key');
                    if (this.translations[this.currentLanguage][key]) {
                        option.textContent = this.translations[this.currentLanguage][key];
                    }
                });
            }
        });

        // Update unit type options
        const unitSelect = document.getElementById('unitType');
        if (unitSelect) {
            const options = unitSelect.querySelectorAll('option[data-lang-key]');
            options.forEach(option => {
                const key = option.getAttribute('data-lang-key');
                if (this.translations[this.currentLanguage][key]) {
                    option.textContent = this.translations[this.currentLanguage][key];
                }
            });
        }

        // Update remarks dropdown options
        const remarksSelect = document.getElementById('remarksDropdown');
        if (remarksSelect) {
            const options = remarksSelect.querySelectorAll('option[data-lang-key]');
            options.forEach(option => {
                const key = option.getAttribute('data-lang-key');
                if (this.translations[this.currentLanguage][key]) {
                    option.textContent = this.translations[this.currentLanguage][key];
                }
            });
        }

        // Update laborer filter
        const laborerFilter = document.getElementById('laborerFilter');
        if (laborerFilter) {
            const allLaborersOption = laborerFilter.querySelector('option[value=""]');
            if (allLaborersOption) {
                allLaborersOption.textContent = this.translations[this.currentLanguage]['allLaborers'];
            }
        }
    }

    getTranslation(key) {
        return this.translations[this.currentLanguage][key] || key;
    }

    handleRemarksChange() {
        const dropdown = document.getElementById('remarksDropdown');
        const textInput = document.getElementById('remarks');
        
        if (dropdown.value === 'custom') {
            textInput.style.display = 'block';
            textInput.focus();
            textInput.value = '';
            textInput.placeholder = this.getTranslation('optionalNotes');
        } else {
            textInput.style.display = 'none';
            textInput.value = dropdown.value;
        }
    }

    getRemarksValue() {
        const dropdown = document.getElementById('remarksDropdown');
        const textInput = document.getElementById('remarks');
        
        if (dropdown.value === 'custom') {
            return textInput.value;
        } else if (dropdown.value) {
            return dropdown.value;
        } else {
            return textInput.value;
        }
    }

    handleRemarksChange() {
        const dropdown = document.getElementById('remarksDropdown');
        const textInput = document.getElementById('remarks');
        
        if (dropdown.value === 'custom') {
            textInput.style.display = 'block';
            textInput.focus();
            textInput.value = '';
            textInput.placeholder = this.getTranslation('optionalNotes');
        } else if (dropdown.value === '') {
            textInput.style.display = 'none';
            textInput.value = '';
        } else {
            textInput.style.display = 'none';
            textInput.value = dropdown.value;
        }
    }

    getRemarksValue() {
        const dropdown = document.getElementById('remarksDropdown');
        const textInput = document.getElementById('remarks');
        
        if (dropdown.value === 'custom') {
            return textInput.value;
        } else if (dropdown.value === '') {
            return '';
        } else {
            return dropdown.value;
        }
    }

    updateTaskDetails(category) {
        const taskDetailSelect = document.getElementById('taskDetail');
        taskDetailSelect.innerHTML = '<option value="">Select Task</option>';
        
        if (category && this.taskDetails[category]) {
            this.taskDetails[category].forEach(task => {
                const option = document.createElement('option');
                option.value = task;
                option.textContent = task;
                taskDetailSelect.appendChild(option);
            });
        }
    }

    addRecord() {
        const submitButton = document.querySelector('button[type="submit"]');
        submitButton.classList.add('loading');
        
        setTimeout(() => {
            const formData = {
                id: Date.now(),
                date: document.getElementById('date').value,
                laborerName: document.getElementById('laborerName').value,
                taskCategory: document.getElementById('taskCategory').value,
                taskDetail: document.getElementById('taskDetail').value,
                unitType: document.getElementById('unitType').value,
                quantity: parseFloat(document.getElementById('quantity').value),
                rate: parseFloat(document.getElementById('rate').value),
                amountPaid: parseFloat(document.getElementById('amountPaid').value) || 0,
                remarks: this.getRemarksValue()
            };

            // Calculate derived fields
            formData.totalEarned = formData.quantity * formData.rate;
            formData.balanceChange = formData.totalEarned - formData.amountPaid;

            this.records.push(formData);
            this.saveToStorage();
            this.renderRecords();
            this.updateSummary();
            this.updateLaborerFilter();
            this.updateLaborerSummary();
            this.updateLaborerDatalist();
            
            // Reset form with animation
            document.getElementById('entryForm').reset();
            document.getElementById('date').valueAsDate = new Date();
            document.getElementById('taskDetail').innerHTML = '<option value="">Select Task</option>';
            
            // Reset remarks dropdown and input
            document.getElementById('remarksDropdown').value = '';
            document.getElementById('remarks').style.display = 'none';
            document.getElementById('remarks').value = '';
            
            submitButton.classList.remove('loading');
            submitButton.classList.add('success-animation');
            setTimeout(() => submitButton.classList.remove('success-animation'), 600);
            
            this.showSuccess('Work record added successfully!');
        }, 500);
    }

    deleteRecord(id) {
        if (confirm('Are you sure you want to delete this record?')) {
            this.records = this.records.filter(record => record.id !== id);
            this.saveToStorage();
            this.renderRecords();
            this.updateSummary();
            this.updateLaborerFilter();
            this.updateLaborerSummary();
            this.updateLaborerDatalist(); // Add this line to update laborer dropdown
            this.showSuccess('Record deleted successfully!');
        }
    }

    calculateRunningBalance(laborerName, upToIndex) {
        return this.records
            .slice(0, upToIndex + 1)
            .filter(record => record.laborerName === laborerName)
            .reduce((sum, record) => sum + record.balanceChange, 0);
    }

    getPaymentStatus(balance) {
        if (balance > 0) return 'Due';
        if (balance < 0) return 'Advance';
        return 'Paid';
    }

    renderRecords() {
        const tbody = document.getElementById('recordsBody');
        tbody.innerHTML = '';

        this.records.forEach((record, index) => {
            const runningBalance = this.calculateRunningBalance(record.laborerName, index);
            const status = this.getPaymentStatus(runningBalance);
            
            const row = document.createElement('tr');
            row.className = 'table-row-enter';
            row.style.animationDelay = `${index * 0.05}s`;
            row.innerHTML = `
                <td>${new Date(record.date).toLocaleDateString()}</td>
                <td>${record.laborerName}</td>
                <td>${record.taskCategory}</td>
                <td>${record.taskDetail}</td>
                <td>${record.unitType}</td>
                <td>${record.quantity}</td>
                <td>₹${record.rate}</td>
                <td>₹${record.totalEarned}</td>
                <td>₹${record.amountPaid}</td>
                <td class="${runningBalance >= 0 ? 'positive' : 'negative'}">₹${Math.abs(runningBalance)}</td>
                <td><span class="status-${status.toLowerCase()}">${this.getTranslation(status.toLowerCase() === 'paid' ? 'paidStatus' : status.toLowerCase())}</span></td>
                <td>${record.remarks}</td>
                <td><button class="delete-btn" onclick="laborSystem.deleteRecord(${record.id})">${this.getTranslation('delete')}</button></td>
            `;
            tbody.appendChild(row);
        });
    }

    filterRecords(laborerName) {
        const rows = document.querySelectorAll('#recordsBody tr');
        rows.forEach(row => {
            if (!laborerName || row.cells[1].textContent === laborerName) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    updateSummary() {
        const laborerBalances = this.getLaborerBalances();
        
        let totalOutstanding = 0;
        let totalAdvances = 0;
        
        Object.values(laborerBalances).forEach(balance => {
            if (balance > 0) totalOutstanding += balance;
            if (balance < 0) totalAdvances += Math.abs(balance);
        });
        
        document.getElementById('totalOutstanding').textContent = `₹${totalOutstanding}`;
        document.getElementById('totalAdvances').textContent = `₹${totalAdvances}`;
    }

    updateLaborerFilter() {
        const select = document.getElementById('laborerFilter');
        const currentValue = select.value;
        
        // Get unique laborer names
        const laborers = [...new Set(this.records.map(record => record.laborerName))].sort();
        
        select.innerHTML = '<option value="">All Laborers</option>';
        laborers.forEach(laborer => {
            const option = document.createElement('option');
            option.value = laborer;
            option.textContent = laborer;
            if (laborer === currentValue) option.selected = true;
            select.appendChild(option);
        });
    }

    updateLaborerDatalist() {
        const datalist = document.getElementById('laborerList');
        
        // Get unique laborer names from records
        const laborers = [...new Set(this.records.map(record => record.laborerName))].sort();
        
        // Clear existing options
        datalist.innerHTML = '';
        
        // Add all unique laborer names to the datalist
        laborers.forEach(laborer => {
            const option = document.createElement('option');
            option.value = laborer;
            datalist.appendChild(option);
        });
    }

    getLaborerBalances() {
        const balances = {};
        
        this.records.forEach(record => {
            if (!balances[record.laborerName]) {
                balances[record.laborerName] = 0;
            }
            balances[record.laborerName] += record.balanceChange;
        });
        
        return balances;
    }

    updateLaborerSummary() {
        const summaryContainer = document.getElementById('summaryCards');
        const balances = this.getLaborerBalances();
        
        summaryContainer.innerHTML = '';
        
        Object.entries(balances).forEach(([laborer, balance], index) => {
            const totalEarned = this.records
                .filter(record => record.laborerName === laborer)
                .reduce((sum, record) => sum + record.totalEarned, 0);
            
            const totalPaid = this.records
                .filter(record => record.laborerName === laborer)
                .reduce((sum, record) => sum + record.amountPaid, 0);
            
            const card = document.createElement('div');
            card.className = 'laborer-card';
            card.style.animationDelay = `${index * 0.2}s`;
            card.innerHTML = `
                <h3>${laborer}</h3>
                <div class="laborer-stats">
                    <div class="stat-item">
                        <div class="label">${this.getTranslation('totalEarned')}</div>
                        <div class="value">₹${totalEarned}</div>
                    </div>
                    <div class="stat-item">
                        <div class="label">${this.getTranslation('totalPaid')}</div>
                        <div class="value">₹${totalPaid}</div>
                    </div>
                    <div class="stat-item">
                        <div class="label">${this.getTranslation('balance')}</div>
                        <div class="value ${balance >= 0 ? 'positive' : 'negative'}">
                            ₹${Math.abs(balance)} ${balance > 0 ? `(${this.getTranslation('due')})` : balance < 0 ? `(${this.getTranslation('advance')})` : ''}
                        </div>
                    </div>
                    <div class="stat-item">
                        <div class="label">${this.getTranslation('status')}</div>
                        <div class="value">
                            <span class="status-${this.getPaymentStatus(balance).toLowerCase()}">
                                ${this.getTranslation(this.getPaymentStatus(balance).toLowerCase() === 'paid' ? 'paidStatus' : this.getPaymentStatus(balance).toLowerCase())}
                            </span>
                        </div>
                    </div>
                </div>
            `;
            summaryContainer.appendChild(card);
        });
    }

    loadSampleData() {
        if (this.records.length === 0) {
            const sampleData = [
                {
                    id: 1,
                    date: '2024-01-15',
                    laborerName: 'Ravi Kumar',
                    taskCategory: 'Arecanut',
                    taskDetail: 'Tree Cutting',
                    unitType: 'Day',
                    quantity: 1,
                    rate: 500,
                    totalEarned: 500,
                    amountPaid: 300,
                    balanceChange: 200,
                    remarks: 'Partial payment'
                },
                {
                    id: 2,
                    date: '2024-01-16',
                    laborerName: 'Ravi Kumar',
                    taskCategory: 'Arecanut',
                    taskDetail: 'Husking',
                    unitType: 'Kg',
                    quantity: 25,
                    rate: 15,
                    totalEarned: 375,
                    amountPaid: 0,
                    balanceChange: 375,
                    remarks: 'No payment today'
                },
                {
                    id: 3,
                    date: '2024-01-17',
                    laborerName: 'Sita Devi',
                    taskCategory: 'Rice',
                    taskDetail: 'Planting',
                    unitType: 'Day',
                    quantity: 1,
                    rate: 400,
                    totalEarned: 400,
                    amountPaid: 400,
                    balanceChange: 0,
                    remarks: 'Full payment'
                },
                {
                    id: 4,
                    date: '2024-01-18',
                    laborerName: 'Mohan Lal',
                    taskCategory: 'Ginger',
                    taskDetail: 'Weeding',
                    unitType: 'Day',
                    quantity: 1,
                    rate: 350,
                    totalEarned: 350,
                    amountPaid: 500,
                    balanceChange: -150,
                    remarks: 'Advance given'
                }
            ];
            
            this.records = sampleData;
            this.saveToStorage();
        }
    }

    saveToStorage() {
        localStorage.setItem('laborRecords', JSON.stringify(this.records));
    }

    exportData() {
        const dataStr = JSON.stringify(this.records, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'labor_records.json';
        link.click();
    }

    importData(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const importedData = JSON.parse(e.target.result);
                    this.records = importedData;
                    this.saveToStorage();
                    this.renderRecords();
                    this.updateSummary();
                    this.updateLaborerFilter();
                    this.updateLaborerSummary();
                    alert('Data imported successfully!');
                } catch (error) {
                    alert('Error importing data. Please check the file format.');
                }
            };
            reader.readAsText(file);
        }
    }
}

// Initialize the system
const laborSystem = new LaborTrackingSystem();