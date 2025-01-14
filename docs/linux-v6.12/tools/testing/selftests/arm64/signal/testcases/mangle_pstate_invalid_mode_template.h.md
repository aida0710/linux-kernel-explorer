---
sidebar_position: 18
---
# mangle_pstate_invalid_mode_template.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/arm64/signal/testcases/mangle_pstate_invalid_mode_template.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (C) 2019 ARM Limited
 *
 * Utility macro to ease definition of testcases toggling mode EL
 */

#define DEFINE_TESTCASE_MANGLE_PSTATE_INVALID_MODE(_mode)		\
									\
static int mangle_invalid_pstate_run(struct tdescr *td, siginfo_t *si,	\
				     ucontext_t *uc)			\
{									\
	ASSERT_GOOD_CONTEXT(uc);					\
									\
	uc->uc_mcontext.pstate &= ~PSR_MODE_MASK;			\
	uc->uc_mcontext.pstate |= PSR_MODE_EL ## _mode;			\
									\
	return 1;							\
}									\
									\
struct tdescr tde = {							\
		.sanity_disabled = true,				\
		.name = "MANGLE_PSTATE_INVALID_MODE_EL"#_mode,		\
		.descr = "Mangling uc_mcontext INVALID MODE EL"#_mode,	\
		.sig_trig = SIGUSR1,					\
		.sig_ok = SIGSEGV,					\
		.run = mangle_invalid_pstate_run,			\
}

```
