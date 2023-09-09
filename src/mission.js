import "./styles/missionStyle.css"

const createMission = () => {
    const content = document.createElement(`div`);
    content.classList.add(`content`);

    const missionStatementHead = document.createElement(`h3`);
    missionStatementHead.classList.add(`mission-head`);
    missionStatementHead.textContent = `/O/ur Purp0se//|//`
    content.appendChild(missionStatementHead)

    const missionBody = document.createElement(`p`);
    missionBody.classList.add(`mission-body`);
    missionBody.textContent = `T o S e e C l e a r l y. T o D r i n k D e e p. T o l o n g m o u r n f u l l y. t o e a t o u r g o d ' s e y e s. t o b e m a d e c l e a n. t o b e s o i l e d. t o b e f l a y e d. t o b e a b u n d a n t. t o b e u n d o n e. r e m a d e. t o b e w i t h o u t p u r p o s e. t o b e c o m e. t o t u r n t h e w h e e l. t o b r e a k t h e a x e l. t o b r e a k t h e w h e e l. t o t u r n t h e w h e e l a g a i n. t o b e. T o S e e C l e a r l y. T o D r i n k D e e p. T o l o n g m o u r n f u l l y. t o e a t o u r g o d ' s e y e s. t o b e m a d e c l e a n. t o b e s o i l e d. t o b e f l a y e d. t o b e a b u n d a n t. t o b e u n d o n e. r e m a d e. t o b e w i t h o u t p u r p o s e. t o b e c o m e. t o t u r n t h e w h e e l. t o b r e a k t h e a x e l. t o b r e a k t h e w h e e l. t o t u r n t h e w h e e l a g a i n. t o b e. T o S e e C l e a r l y. T o D r i n k D e e p. T o l o n g m o u r n f u l l y. t o e a t o u r g o d ' s e y e s. t o b e m a d e c l e a n. t o b e s o i l e d. t o b e f l a y e d. t o b e a b u n d a n t. t o b e u n d o n e. r e m a d e. t o b e w i t h o u t p u r p o s e. t o b e c o m e. t o t u r n t h e w h e e l. t o b r e a k t h e a x e l. t o b r e a k t h e w h e e l. t o t u r n t h e w h e e l a g a i n. t o b e. T o S e e C l e a r l y. T o D r i n k D e e p. T o l o n g m o u r n f u l l y. t o e a t o u r g o d ' s e y e s. t o b e m a d e c l e a n. t o b e s o i l e d. t o b e f l a y e d. t o b e a b u n d a n t. t o b e u n d o n e. r e m a d e. t o b e w i t h o u t p u r p o s e. t o b e c o m e. t o t u r n t h e w h e e l. t o b r e a k t h e a x e l. t o b r e a k t h e w h e e l. t o t u r n t h e w h e e l a g a i n. t o b e. T o S e e C l e a r l y. T o D r i n k D e e p. T o l o n g m o u r n f u l l y. t o e a t o u r g o d ' s e y e s. t o b e m a d e c l e a n. t o b e s o i l e d. t o b e f l a y e d. t o b e a b u n d a n t. t o b e u n d o n e. r e m a d e. t o b e w i t h o u t p u r p o s e. t o b e c o m e. t o t u r n t h e w h e e l. t o b r e a k t h e a x e l. t o b r e a k t h e w h e e l. t o t u r n t h e w h e e l a g a i n. t o b e. T o S e e C l e a r l y. T o D r i n k D e e p. T o l o n g m o u r n f u l l y. t o e a t o u r g o d ' s e y e s. t o b e m a d e c l e a n. t o b e s o i l e d. t o b e f l a y e d. t o b e a b u n d a n t. t o b e u n d o n e. r e m a d e. t o b e w i t h o u t p u r p o s e. t o b e c o m e. t o t u r n t h e w h e e l. t o b r e a k t h e a x e l. t o b r e a k t h e w h e e l. t o t u r n t h e w h e e l a g a i n. t o b e.`
    content.appendChild(missionBody)

    return content
};

export { createMission }