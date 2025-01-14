---
sidebar_position: 10
---
# error.h

### ファイル情報

- パス: `linux-v6.12/arch/x86/boot/compressed/error.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef BOOT_COMPRESSED_ERROR_H
#define BOOT_COMPRESSED_ERROR_H

#include <linux/compiler.h>

void warn(const char *m);
void error(char *m) __noreturn;
void panic(const char *fmt, ...) __noreturn __cold;

#endif /* BOOT_COMPRESSED_ERROR_H */

```
