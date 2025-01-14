---
sidebar_position: 20
---
# firmware_attributes_class.h

### ファイル情報

- パス: `linux-v6.12/drivers/platform/x86/firmware_attributes_class.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

/* Firmware attributes class helper module */

#ifndef FW_ATTR_CLASS_H
#define FW_ATTR_CLASS_H

int fw_attributes_class_get(const struct class **fw_attr_class);
int fw_attributes_class_put(void);

#endif /* FW_ATTR_CLASS_H */

```
