---
sidebar_position: 13
---
# LB+poacquireonce+pooncerelease.litmus

### ファイル情報

- パス: `linux-v6.12/tools/memory-model/litmus-tests/LB+poacquireonce+pooncerelease.litmus`

### コンテンツ

```litmus
C LB+poacquireonce+pooncerelease

(*
 * Result: Never
 *
 * Does a release-acquire pair suffice for the load-buffering litmus
 * test, where each process reads from one of two variables then writes
 * to the other?
 *)

{}

P0(int *x, int *y)
{
	int r0;

	r0 = READ_ONCE(*x);
	smp_store_release(y, 1);
}

P1(int *x, int *y)
{
	int r0;

	r0 = smp_load_acquire(y);
	WRITE_ONCE(*x, 1);
}

exists (0:r0=1 /\ 1:r0=1)

```
