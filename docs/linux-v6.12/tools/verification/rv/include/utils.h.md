---
sidebar_position: 4
---
# utils.h

### ファイル情報

- パス: `linux-v6.12/tools/verification/rv/include/utils.h`

### コンテンツ

```h
// SPDX-License-Identifier: GPL-2.0

#define MAX_PATH		1024

void debug_msg(const char *fmt, ...);
void err_msg(const char *fmt, ...);

extern int config_debug;

```
