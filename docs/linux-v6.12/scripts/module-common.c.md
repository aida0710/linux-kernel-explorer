---
sidebar_position: 109
---
# module-common.c

### ファイル情報

- パス: `linux-v6.12/scripts/module-common.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <linux/module.h>
/*
 * Include build-salt.h after module.h in order to
 * inherit the definitions.
 */
#define INCLUDE_VERMAGIC
#include <linux/build-salt.h>
#include <linux/elfnote-lto.h>
#include <linux/vermagic.h>

#ifdef CONFIG_UNWINDER_ORC
#include <asm/orc_header.h>
ORC_HEADER;
#endif

BUILD_SALT;
BUILD_LTO_INFO;

MODULE_INFO(vermagic, VERMAGIC_STRING);

#ifdef CONFIG_MITIGATION_RETPOLINE
MODULE_INFO(retpoline, "Y");
#endif

```
