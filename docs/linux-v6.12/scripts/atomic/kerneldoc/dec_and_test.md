---
sidebar_position: 8
---
# dec_and_test

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/kerneldoc/dec_and_test`

### コンテンツ

```txt
cat <<EOF
/**
 * ${class}${atomicname}() - atomic decrement and test if zero with ${desc_order} ordering
 * @v: pointer to ${atomic}_t
 *
 * Atomically updates @v to (@v - 1) with ${desc_order} ordering.
 *
 * ${desc_noinstr}
 *
 * Return: @true if the resulting value of @v is zero, @false otherwise.
 */
EOF

```
