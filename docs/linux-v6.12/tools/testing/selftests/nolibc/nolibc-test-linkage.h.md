---
sidebar_position: 4
---
# nolibc-test-linkage.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/nolibc/nolibc-test-linkage.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef _NOLIBC_TEST_LINKAGE_H
#define _NOLIBC_TEST_LINKAGE_H

void *linkage_test_errno_addr(void);
extern int linkage_test_constructor_test_value;

#endif /* _NOLIBC_TEST_LINKAGE_H */

```
