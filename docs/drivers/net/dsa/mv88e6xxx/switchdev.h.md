---
sidebar_position: 33
---
# switchdev.h

### ファイル情報

- パス: `drivers/net/dsa/mv88e6xxx/switchdev.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later
 *
 * switchdev.h
 *
 *	Authors:
 *	Hans J. Schultz		<netdev@kapio-technology.com>
 *
 */

#ifndef _MV88E6XXX_SWITCHDEV_H_
#define _MV88E6XXX_SWITCHDEV_H_

#include "chip.h"

int mv88e6xxx_handle_miss_violation(struct mv88e6xxx_chip *chip, int port,
				    struct mv88e6xxx_atu_entry *entry,
				    u16 fid);

#endif /* _MV88E6XXX_SWITCHDEV_H_ */

```
