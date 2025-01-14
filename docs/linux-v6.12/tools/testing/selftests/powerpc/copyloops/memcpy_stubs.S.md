---
sidebar_position: 10
---
# memcpy_stubs.S

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/powerpc/copyloops/memcpy_stubs.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
#include <asm/ppc_asm.h>

FUNC_START(memcpy)
	b test_memcpy

FUNC_START(backwards_memcpy)
	b test_backwards_memcpy

```
