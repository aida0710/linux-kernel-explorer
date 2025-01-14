---
sidebar_position: 7
---
# dell-rbtn.h

### ファイル情報

- パス: `linux-v6.12/drivers/platform/x86/dell/dell-rbtn.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
    Dell Airplane Mode Switch driver
    Copyright (C) 2014-2015  Pali Rohár <pali@kernel.org>

*/

#ifndef _DELL_RBTN_H_
#define _DELL_RBTN_H_

struct notifier_block;

int dell_rbtn_notifier_register(struct notifier_block *nb);
int dell_rbtn_notifier_unregister(struct notifier_block *nb);

#endif

```
