---
sidebar_position: 21
---
# xchg

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/kerneldoc/xchg`

### コンテンツ

```txt
cat <<EOF
/**
 * ${class}${atomicname}() - atomic exchange with ${desc_order} ordering
 * @v: pointer to ${atomic}_t
 * @new: ${int} value to assign
 *
 * Atomically updates @v to @new with ${desc_order} ordering.
 *
 * ${desc_noinstr}
 *
 * Return: The original value of @v.
 */
EOF

```
