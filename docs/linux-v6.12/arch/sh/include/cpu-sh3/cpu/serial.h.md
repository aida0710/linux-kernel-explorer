---
sidebar_position: 9
---
# serial.h

### ファイル情報

- パス: `linux-v6.12/arch/sh/include/cpu-sh3/cpu/serial.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __CPU_SH3_SERIAL_H
#define __CPU_SH3_SERIAL_H

#include <linux/serial_sci.h>

extern struct plat_sci_port_ops sh770x_sci_port_ops;
extern struct plat_sci_port_ops sh7710_sci_port_ops;
extern struct plat_sci_port_ops sh7720_sci_port_ops;

#endif /* __CPU_SH3_SERIAL_H */

```
