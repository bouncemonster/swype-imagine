# Contributing Guide

## Welcome! 🎉

Thank you for considering contributing to Golden Ratio WebGPU Fractal Engine! This guide will help you get started.

## Code of Conduct

Please be respectful and constructive in all interactions. We're building an inclusive community around mathematical art and science.

## How Can I Contribute?

### 1. Reporting Bugs 🐛

Before creating an issue:
- Check existing issues to avoid duplicates
- Use the bug report template
- Include reproduction steps
- Add screenshots if applicable

**Bug Report Template:**
```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
 - OS: [e.g. Windows 11]
 - Browser: [e.g. Chrome 120]
 - GPU: [e.g. RTX 3060]
 - Version: [e.g. 1.0.0]

**Additional context**
Add any other context about the problem.
```

### 2. Suggesting Features 💡

Feature requests are welcome! Use the feature request template:

```markdown
**Is your feature request related to a problem?**
A clear description of what the problem is.

**Describe the solution you'd like**
What you want to happen.

**Describe alternatives you've considered**
Other solutions or features you've thought about.

**Additional context**
Screenshots, mockups, or examples.
```

### 3. Contributing Code 👨‍💻

#### Getting Started

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub
   # or
   gh repo fork bouncemonster/swype-imagine
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/bouncemonster/swype-imagine.git
   cd golden-ratio-webgpu-fractal-engine
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

4. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

5. **Start dev server**
   ```bash
   npm run dev
   ```

#### Development Workflow

1. **Make changes**
   - Follow existing code style
   - Add comments for complex logic
   - Keep functions focused and small

2. **Test your changes**
   ```bash
   # Type-check the project (the `lint` script runs `tsc --noEmit`)
   npm run lint
   
   # Build for production
   npm run build
   ```

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new fractal type"
   ```

   **Commit Message Format:**
   ```
   type: description
   
   Types:
   - feat: New feature
   - fix: Bug fix
   - docs: Documentation only
   - style: Formatting, no code change
   - refactor: Code restructuring
   - perf: Performance improvement
   - test: Adding tests
   - chore: Maintenance
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**
   - Go to your fork on GitHub
   - Click "Compare & pull request"
   - Fill out the PR template
   - Submit for review

#### Pull Request Template

```markdown
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe how you tested your changes.

## Screenshots
If applicable, add screenshots.

## Checklist
- [ ] Code follows project style
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Tests added/updated
- [ ] All tests pass

## Related Issues
Closes #123
```

### 4. Improving Documentation 📚

Documentation improvements are highly valued!

**Areas to improve:**
- Fix typos or unclear explanations
- Add examples to existing docs
- Create new tutorials
- Translate to other languages
- Add diagrams or screenshots

**Documentation files:**
- `docs/` - Main documentation
- `README.md` - Project overview
- Code comments - Inline documentation

### 5. Adding Fractals 🎨

See [TUTORIALS.md](docs/TUTORIALS.md#how-to-add-a-new-fractal-type) for detailed guide.

**Quick steps:**
1. Define SDF function in `src/shaders/webglShaders.ts`
2. Add to fractal mapper in `src/engine/fractalMappers.ts`
3. Add to catalog in `src/data/categories/`
4. Update documentation

### 6. Adding Render Modes 🎭

See [TUTORIALS.md](docs/TUTORIALS.md#how-to-create-a-new-render-mode) for guide.

**Quick steps:**
1. Implement render function in shader
2. Add to render switch
3. Update UI in ControlsPanel
4. Document new mode

### 7. Performance Optimization ⚡

Performance improvements are always welcome!

**Areas:**
- Shader optimization
- Reduce CPU-GPU transfers
- Better memory management
- Caching strategies
- Lazy loading

**Guidelines:**
- Benchmark before/after
- Document the optimization
- Ensure no visual regression
- Test on low-end devices

## Code Style

### TypeScript
- Use TypeScript for all new code
- Follow existing naming conventions
- Add JSDoc comments for public APIs
- Write strict-mode-compatible code (the project's `tsconfig.json` enables `strict: true` — CI runs `tsc --noEmit` and fails on any error)

### React
- Functional components with hooks
- TypeScript interfaces for props
- Memoize expensive computations
- Keep components focused

### Shaders (GLSL/WGSL)
- Follow existing naming conventions
- Add comments for complex math
- Test on multiple GPUs
- Consider mobile performance

### CSS/Tailwind
- Use Tailwind utilities
- Mobile-first approach
- Consistent spacing
- Dark theme compatible

## Testing

### Manual Testing
- Test on desktop (Chrome, Firefox, Edge)
- Test on mobile (iOS Safari, Android Chrome)
- Test with different GPUs
- Test edge cases

### Automated Testing
```bash
# Run the automated fractal test suite
npm test

# Run browser (E2E) tests
npm run test:browser

# Run everything (unit + visual + headless + benchmark + quality)
npm run test:all
```

## Documentation

### Writing Style
- Clear and concise
- Use examples
- Include code snippets
- Add screenshots for UI changes

### File Naming
- `ComponentName.md` for components
- `feature-name.md` for features
- `ARCHITECTURE.md` for system design

## Review Process

### What We Look For
1. **Code quality**: Clean, readable, maintainable
2. **Functionality**: Works as described
3. **Testing**: Adequately tested
4. **Documentation**: Well documented
5. **Performance**: No regressions
6. **Style**: Follows project conventions

### Review Timeline
- Initial review: 2-3 days
- Revision cycle: 1-2 days
- Merge: After approval

### Feedback
- Be open to suggestions
- Ask questions if unclear
- Iterate based on feedback
- Celebrate improvements

## Recognition

Contributors are recognized in:
- GitHub contributors list
- Release notes
- Project documentation

## Questions?

- Check [FAQ.md](docs/FAQ.md)
- Open GitHub Discussion
- Contact maintainers

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## Quick Start Checklist

- [ ] Fork and clone repository
- [ ] Install dependencies
- [ ] Start dev server
- [ ] Create feature branch
- [ ] Make changes
- [ ] Test thoroughly
- [ ] Update documentation
- [ ] Commit with proper message
- [ ] Push to fork
- [ ] Create pull request
- [ ] Respond to review feedback

Thank you for contributing! 🙏

