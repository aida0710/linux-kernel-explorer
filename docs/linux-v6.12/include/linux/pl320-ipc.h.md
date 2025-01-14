---
sidebar_position: 979
---
# pl320-ipc.h

### ファイル情報

- パス: `linux-v6.12/include/linux/pl320-ipc.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 */

int pl320_ipc_transmit(u32 *data);
int pl320_ipc_register_notifier(struct notifier_block *nb);
int pl320_ipc_unregister_notifier(struct notifier_block *nb);

```
