---
sidebar_position: 167
---
# vtime.h

### ファイル情報

- パス: `linux-v6.12/arch/s390/include/asm/vtime.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _S390_VTIME_H
#define _S390_VTIME_H

static inline void update_timer_sys(void)
{
	struct lowcore *lc = get_lowcore();

	lc->system_timer += lc->last_update_timer - lc->exit_timer;
	lc->user_timer += lc->exit_timer - lc->sys_enter_timer;
	lc->last_update_timer = lc->sys_enter_timer;
}

static inline void update_timer_mcck(void)
{
	struct lowcore *lc = get_lowcore();

	lc->system_timer += lc->last_update_timer - lc->exit_timer;
	lc->user_timer += lc->exit_timer - lc->mcck_enter_timer;
	lc->last_update_timer = lc->mcck_enter_timer;
}

#endif /* _S390_VTIME_H */

```
