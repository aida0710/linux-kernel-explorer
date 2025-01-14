---
sidebar_position: 31
---
# version.c

### ファイル情報

- パス: `linux-v6.12/arch/s390/boot/version.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <generated/utsversion.h>
#include <generated/utsrelease.h>
#include <generated/compile.h>
#include "boot.h"

const char kernel_version[] = UTS_RELEASE
	" (" LINUX_COMPILE_BY "@" LINUX_COMPILE_HOST ") " UTS_VERSION;

```
