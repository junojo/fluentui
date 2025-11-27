# Figma Code Connect Implementation Checklist

Use this checklist to track progress as your team implements Code Connect for Fluent UI components.

## 🏁 Setup Phase (One-time)

- [ ] **Admin Task**: Get Figma personal access token
  - Location: https://www.figma.com/settings/account
  - Action: Create new token and store securely
  - Owner: _______________

- [ ] **Admin Task**: Find Figma file ID
  - Open design system file in Figma
  - Extract ID from URL
  - Owner: _______________

- [ ] **Admin Task**: Add secrets to GitHub
  - Go to: Settings → Secrets and variables → Actions
  - Add: `FIGMA_TOKEN`
  - Add: `FIGMA_FILE_ID`
  - Owner: _______________

- [ ] **Dev Task**: Install dependencies
  ```bash
  yarn install
  ```
  - Status: _______________
  - Date: _______________

- [ ] **Dev Task**: Test audit locally
  ```bash
  yarn figma:audit
  ```
  - Passed: [ ] Yes [ ] No
  - Date: _______________

## 📦 Phase 1 - Core Components (Priority 1)

These are the most critical components. Start here!

### Button Component

- [ ] Create `.figma.tsx` file
  - Location: `packages/react-components/react-button/library/src/Button.figma.tsx`
  - Template: `CODE_CONNECT_TEMPLATE.md`
  - Owner: _______________

- [ ] Map properties
  - [ ] appearance variant
  - [ ] size variant
  - [ ] disabled state
  - [ ] label/children
  - Date: _______________

- [ ] Test locally
  ```bash
  yarn figma:audit
  ```
  - Status: _______________
  - Issues: _______________

- [ ] Create pull request
  - Branch: _______________
  - PR #: _______________
  - Date: _______________

- [ ] Merge to master
  - Auto-published by CI/CD
  - Verify in Figma: [ ] Yes [ ] No
  - Date: _______________

### Text Component

- [ ] Create `.figma.tsx` file
  - Location: `packages/react-components/react-text/library/src/Text.figma.tsx`
  - Owner: _______________

- [ ] Map properties
  - [ ] size variant
  - [ ] weight variant
  - [ ] color/appearance
  - [ ] content
  - Date: _______________

- [ ] Test and merge
  - Local test passed: _______________
  - PR #: _______________
  - Merged: _______________

### Input Component

- [ ] Create `.figma.tsx` file
  - Location: `packages/react-components/react-input/library/src/Input.figma.tsx`
  - Owner: _______________

- [ ] Map properties
  - [ ] size
  - [ ] appearance
  - [ ] disabled
  - [ ] placeholder
  - [ ] required
  - Date: _______________

- [ ] Test and merge
  - Status: _______________
  - PR #: _______________

### Checkbox Component

- [ ] Create `.figma.tsx` file
  - Location: `packages/react-components/react-checkbox/library/src/Checkbox.figma.tsx`
  - Owner: _______________

- [ ] Map properties
  - [ ] checked state
  - [ ] disabled
  - [ ] size
  - [ ] label
  - Date: _______________

- [ ] Test and merge
  - Status: _______________
  - PR #: _______________

### Radio Component

- [ ] Create `.figma.tsx` file
  - Location: `packages/react-components/react-radio/library/src/Radio.figma.tsx`
  - Owner: _______________

- [ ] Map properties
  - [ ] checked state
  - [ ] disabled
  - [ ] size
  - [ ] label
  - Date: _______________

- [ ] Test and merge
  - Status: _______________
  - PR #: _______________

## 🧭 Phase 2 - Navigation Components (Priority 2)

After Phase 1 is complete, continue with these.

### Menu Component
- [ ] Created: _______________
- [ ] Merged: _______________
- [ ] Verified in Figma: [ ] Yes

### Tabs Component
- [ ] Created: _______________
- [ ] Merged: _______________
- [ ] Verified in Figma: [ ] Yes

### Breadcrumb Component
- [ ] Created: _______________
- [ ] Merged: _______________
- [ ] Verified in Figma: [ ] Yes

### Link Component
- [ ] Created: _______________
- [ ] Merged: _______________
- [ ] Verified in Figma: [ ] Yes

## 🎨 Phase 3 - Layout Components (Priority 3)

### Stack Component
- [ ] Created: _______________
- [ ] Merged: _______________

### Flex Component
- [ ] Created: _______________
- [ ] Merged: _______________

### Grid Component
- [ ] Created: _______________
- [ ] Merged: _______________

### Card Component
- [ ] Created: _______________
- [ ] Merged: _______________

## 📋 Phase 4 - Remaining Components (Priority 4)

List other components as needed:

### [Component Name]
- [ ] Created: _______________
- [ ] Merged: _______________

### [Component Name]
- [ ] Created: _______________
- [ ] Merged: _______________

### [Component Name]
- [ ] Created: _______________
- [ ] Merged: _______________

## 🎯 Quality Assurance

For each component added:

- [ ] Code review completed
  - Reviewer: _______________
  - Approved: _______________

- [ ] Props mapping is accurate
  - Check: Design property names match _______________
  - Check: Code values match component props _______________

- [ ] Component renders without errors
  - Tested in: _______________
  - Status: _______________

- [ ] Figma integration verified
  - Dev Mode shows code: [ ] Yes [ ] No
  - Code snippet is accurate: [ ] Yes [ ] No
  - Date verified: _______________

## 📊 Progress Dashboard

| Component | Owner | Status | PR # | Merged | Verified |
|-----------|-------|--------|------|--------|----------|
| Button | | | | | |
| Text | | | | | |
| Input | | | | | |
| Checkbox | | | | | |
| Radio | | | | | |
| Menu | | | | | |
| Tabs | | | | | |
| Breadcrumb | | | | | |
| Link | | | | | |
| Stack | | | | | |
| Flex | | | | | |
| Grid | | | | | |
| Card | | | | | |

## 🚀 Launch Readiness

When ready to announce:

- [ ] All Phase 1 components complete
- [ ] All Phase 2 components complete
- [ ] Quality assurance passed
- [ ] Documentation updated
- [ ] Team trained on usage
- [ ] Figma Dev Mode enabled for design team

## 📢 Communication Checklist

- [ ] Announce to design team
  - Date: _______________
  - Channel: _______________

- [ ] Create tutorial for designers
  - Location: _______________
  - Owner: _______________

- [ ] Create tutorial for developers
  - Location: _______________
  - Owner: _______________

- [ ] Add to onboarding docs
  - Location: _______________
  - Date: _______________

## 🎓 Training & Documentation

- [ ] All team members aware of feature
- [ ] Designers know how to use Dev Mode
- [ ] Developers know how to copy code
- [ ] README updated
- [ ] Wiki/docs updated

## Notes & Issues

```
[Use this space for tracking issues, blockers, or notes]

Date: _______________
Issue: _______________
Owner: _______________
Status: [ ] Open [ ] In Progress [ ] Resolved
Resolution: _______________

---

Date: _______________
Issue: _______________
Owner: _______________
Status: [ ] Open [ ] In Progress [ ] Resolved
Resolution: _______________
```

## Sign-Off

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Project Lead | | | |
| Design Lead | | | |
| Engineering Lead | | | |

---

**Last Updated**: _______________
**Total Components Mapped**: _______________
**Overall Progress**: ________________%
