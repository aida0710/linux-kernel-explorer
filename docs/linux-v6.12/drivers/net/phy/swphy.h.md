---
sidebar_position: 85
---
# swphy.h

### ファイル情報

- パス: `linux-v6.12/drivers/net/phy/swphy.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef SWPHY_H
#define SWPHY_H

struct fixed_phy_status;

int swphy_validate_state(const struct fixed_phy_status *state);
int swphy_read_reg(int reg, const struct fixed_phy_status *state);

#endif

```
