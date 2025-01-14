---
sidebar_position: 40
---
# mseal_helpers.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/mm/mseal_helpers.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#define FAIL_TEST_IF_FALSE(test_passed)					\
	do {								\
		if (!(test_passed)) {					\
			ksft_test_result_fail("%s: line:%d\n",		\
						__func__, __LINE__);	\
			return;						\
		}							\
	} while (0)

#define SKIP_TEST_IF_FALSE(test_passed)					\
	do {								\
		if (!(test_passed)) {					\
			ksft_test_result_skip("%s: line:%d\n",		\
						__func__, __LINE__);	\
			return;						\
		}							\
	} while (0)

#define REPORT_TEST_PASS() ksft_test_result_pass("%s\n", __func__)

#ifndef PKEY_DISABLE_ACCESS
#define PKEY_DISABLE_ACCESS	0x1
#endif

#ifndef PKEY_DISABLE_WRITE
#define PKEY_DISABLE_WRITE	0x2
#endif

#ifndef PKEY_BITS_PER_PKEY
#define PKEY_BITS_PER_PKEY	2
#endif

#ifndef PKEY_MASK
#define PKEY_MASK	(PKEY_DISABLE_ACCESS | PKEY_DISABLE_WRITE)
#endif

#ifndef u64
#define u64 unsigned long long
#endif

```
