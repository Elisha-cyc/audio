/* Six textbook-aligned POLI 111 audiobook chapters.
   Each SUBTOPIC becomes its own readable/listenable page via splitForPages(). */
(function(){
'use strict';
if(window.abcTextbookLoaded || typeof chapters==='undefined' || typeof nav!=='function') return;
const textbook = [
{
title:'Chapter 1 — Nature and Scope of Political Science',
deck:'What politics means, how political science studies it, and what governments do.',
section:'The ABC of Political Science · Chapter One',
src:'Based on The ABC of Political Science, Chapter One',
take:'Politics is about collective life: who makes decisions, how power is used, and whose interests shape the outcome.',
text:`SUBTOPIC: Meaning of politics
Politics concerns the interactions and relationships among people living together. It includes the ways societies make collective decisions, manage disagreement, distribute shared resources, and decide who gets what, when, and how. Politics is not limited to elections or parliament; it appears wherever people organise common life.

SUBTOPIC: Other definitions of politics
Politics has been described as the authoritative allocation of values, the art of government, the struggle for power, and the process of deciding how resources and opportunities are shared. These definitions highlight different parts of the same subject: decision-making, institutions, conflict, cooperation, and power.

SUBTOPIC: Political science
Political science is the systematic study of politics and political behaviour. It examines governments, states, institutions, public policies, political ideas, elections, citizens, and relationships between countries. It uses evidence and organised methods to explain how political life works.

SUBTOPIC: Is the study of politics scientific?
There is debate about whether politics is a science. Critics such as Maitland argue that politics is closer to an art because human behaviour changes and cannot be predicted with the precision of the physical sciences. Supporters argue that political researchers observe facts, compare cases, collect data, test explanations, and make cautious predictions. Political science is systematic, although its findings are often less exact than those of laboratory sciences.

SUBTOPIC: Scope of political science
The scope of political science is broad. It includes political theory and ideologies, the state and government, constitutions and law, public administration and policy, political parties and elections, political behaviour, comparative government, international relations, and relations between citizens and institutions.

SUBTOPIC: Government
Government is the machinery or institution through which the state makes and enforces public decisions. It consists of people and bodies authorised to exercise public power, make laws, implement policies, maintain order, and represent the state. Governments may change after elections or other political transitions, while the state continues.

SUBTOPIC: Functions of government
Government maintains law and order, protects the state and its people, provides public services, raises revenue, manages the economy, protects rights, settles disputes, builds infrastructure, and conducts foreign relations. The balance between these functions differs across political systems and historical periods.

SUBTOPIC: Classification of government
Governments can be classified by the number of rulers, the way leaders are selected, the relationship between executive and legislature, and how power is distributed territorially. Classification helps comparison, but real political systems may combine features from more than one category.

SUBTOPIC: Monarchy
A monarchy is a system in which the head of state is a king, queen, or another hereditary monarch. In an absolute monarchy, the monarch exercises extensive governing power. In a constitutional monarchy, the monarch's powers are limited by law and elected institutions, and elected officials normally govern.

SUBTOPIC: Tyranny
Tyranny is rule in which power is exercised arbitrarily or oppressively, usually for the ruler's own benefit rather than the common good. It is associated with abuse of authority, suppression of opposition, and disregard for legal or constitutional limits.

SUBTOPIC: Other forms of government
Other forms discussed in political thought include aristocracy, oligarchy, democracy, and polity. These terms distinguish rule by a few or many and whether power is directed toward public welfare or private interests. Modern classifications also include authoritarian and totalitarian systems.

SUBTOPIC: Chapter summary
Politics is part of everyday collective life. Political science studies it systematically, even though political behaviour is difficult to predict exactly. Its scope covers ideas, institutions, behaviour, policy, and international affairs. Government is the machinery that exercises public authority and performs essential public functions.

SUBTOPIC: Revision questions
1. Explain two definitions of politics and show how they relate to power and collective decision-making. 2. What is political science? Discuss arguments for and against treating it as a science. 3. Identify five functions of government. 4. Distinguish monarchy from tyranny.`
},
{
title:'Chapter 2 — The State',
deck:'The meaning, origins, features, roles, and capacity of the state.',
section:'The ABC of Political Science · Chapter Two',
src:'Based on The ABC of Political Science, Chapter Two',
take:'A state is distinguished by its population, territory, government, and sovereignty; a government administers the state but is not the state itself.',
text:`SUBTOPIC: Origin of the word state
The word state comes from the Latin status, meaning condition or standing. Its modern political use developed in Europe as political authority became organised around defined territories and central institutions. Today it refers to a politically organised community with recognised authority over a territory.

SUBTOPIC: Meaning of the state
A state is a political community occupying a defined territory, made up of a population, organised under a government, and possessing sovereignty. It is a continuing legal and political entity. A state is not simply its current leaders or government.

SUBTOPIC: Essential features of the state
The four commonly identified essential features are population, territory, government, and sovereignty. Population refers to the people; territory is the defined geographical area; government provides institutions for making and enforcing decisions; sovereignty is the state's supreme authority internally and independence externally.

SUBTOPIC: Theories of the origin of the state
Different theories explain how states emerged. They are attempts to account for the development of political authority and should be understood as competing explanations rather than one universally proven historical account.

SUBTOPIC: Divine theory
The divine theory holds that the state or the authority of rulers originates from God or a divine source. Historically, it was used to justify obedience to monarchs as rulers believed to govern by divine appointment. Critics question its reliance on religious claims and its limited explanation of the many ways states developed.

SUBTOPIC: Social contract theories
Social contract theories explain the state as arising from an agreement, explicit or implied, among individuals who seek security, order, and the protection of rights. Thinkers such as Hobbes, Locke, and Rousseau offered different accounts of the agreement and the powers citizens should grant to government.

SUBTOPIC: Force theory
The force theory argues that states emerged when stronger groups conquered or subdued weaker groups and established control over territory and people. Force may explain some historical state-building, but it does not fully explain the development of accepted authority, laws, institutions, or cooperation.

SUBTOPIC: Genetic theory
The genetic or patriarchal theory links the origin of the state to the growth of the family. Families expanded into clans and tribes, and political authority developed from the authority of family heads. Critics argue that states have also emerged through many other social, economic, military, and historical processes.

SUBTOPIC: Role of the state
The state provides a framework for order and collective life. Its roles include protecting people and territory, maintaining security, enforcing law, protecting rights, providing public goods, regulating economic activity, promoting welfare, and representing the community internationally.

SUBTOPIC: Concept of nation
A nation is a community of people who share a sense of common identity. Members may be connected by history, culture, language, traditions, territory, or a shared political aspiration. A nation is based strongly on collective identity and belonging.

SUBTOPIC: Features of a nation
Common features may include shared historical memories, cultural practices, language, traditions, a sense of solidarity, and a desire for a common future. Not every nation has all these features, and nations can contain people with different languages, religions, and cultural backgrounds.

SUBTOPIC: Distinction between state and nation
A state is a political and legal organisation with territory, government, population, and sovereignty. A nation is primarily a community of shared identity. A state has defined political institutions and legal authority; a nation may exist without an independent state, and one state may contain several nations.

SUBTOPIC: Similarities between state and nation
Both involve groups of people and can be connected to territory, history, identity, and collective interests. Both can inspire loyalty and solidarity. However, their foundations differ: statehood depends on political and legal organisation, while nationhood depends more on shared identity.

SUBTOPIC: Concept of nation-state
A nation-state is a political arrangement in which the boundaries of a state broadly correspond with the territory of a nation. In practice, perfect alignment is rare because most states contain diverse communities and identities.

SUBTOPIC: State and government
The state is the enduring political entity; government is the set of institutions and officeholders that administer it at a particular time. Governments may change through elections or other means without the state ceasing to exist. Government exercises state authority but is not identical to the state.

SUBTOPIC: State capacity
State capacity is the ability of public institutions to make and implement decisions, enforce laws, collect revenue, provide services, maintain security, and reach people across the territory. Capacity depends on effective institutions, resources, skilled personnel, public trust, and accountability.

SUBTOPIC: Chapter summary
The state is a sovereign political organisation with population, territory, and government. Theories of its origin include divine, social contract, force, and genetic explanations. A nation is a community of shared identity, while a government is the machinery that administers the state. State capacity concerns the ability to carry out public responsibilities.

SUBTOPIC: Revision questions
1. Define the state and explain its four essential features. 2. Compare the divine and social contract theories. 3. Distinguish a state from a nation. 4. Explain the difference between the state and government. 5. What is state capacity and why does it matter?`
},
{
title:'Chapter 3 — Power, Influence, Authority, Legitimacy and Sovereignty',
deck:'How political actors shape decisions, gain acceptance, and exercise supreme authority.',
section:'The ABC of Political Science · Chapter Three',
src:'Based on The ABC of Political Science, Chapter Three',
take:'Power is the capacity to shape outcomes; authority is accepted rightful power; legitimacy is the belief that rule is justified; sovereignty concerns supreme state authority.',
text:`SUBTOPIC: Power
Power is the ability of an individual or group to influence behaviour, decisions, or outcomes, including the ability to get others to do something they might not otherwise do. Power can be visible in commands and laws or less visible in control over resources, agendas, and ideas.

SUBTOPIC: Characteristics of power
Power is relational because it involves relationships between actors. It is unevenly distributed, can be exercised directly or indirectly, and may be based on force, rewards, persuasion, knowledge, status, or control of institutions. Power can be resisted, limited, negotiated, and changed over time.

SUBTOPIC: Sources of power
Sources include wealth and property, control of information, legal office, coercive resources, expertise, social status, organisation, public support, political connections, and the ability to mobilise people. The importance of each source depends on the political situation.

SUBTOPIC: Modes of exercising power
Power may be exercised through force or threats, rewards and incentives, persuasion, bargaining, agenda-setting, laws and regulations, and control of information. It may also operate indirectly by shaping beliefs and defining which issues are considered important or acceptable.

SUBTOPIC: Influence
Influence is the ability to affect another person's attitudes, choices, or behaviour without necessarily issuing a formal command. It often works through persuasion, example, expertise, reputation, relationships, or control of information.

SUBTOPIC: Forms of influence
Influence can be personal, political, economic, social, or ideological. It may be exercised through lobbying, public campaigns, advice, negotiation, media communication, demonstrations, and the setting of public agendas.

SUBTOPIC: Authority
Authority is power that is recognised as rightful or legitimate by those subject to it. People obey authority not only because they fear punishment, but because they accept that an officeholder or institution has a recognised right to make decisions.

SUBTOPIC: Features of authority
Authority involves a recognised right to issue directions, an accepted relationship between officeholder and followers, and rules or traditions that define the limits of power. Authority is more stable when people regard it as legitimate and when it is exercised within accepted procedures.

SUBTOPIC: Types of authority
Max Weber identified three ideal types of legitimate authority: traditional, charismatic, and legal-rational. They differ according to the reason people accept the right of a leader or institution to rule.

SUBTOPIC: Traditional authority
Traditional authority rests on established customs and long-standing practices. People obey because they believe the tradition is valid. Traditional chiefs and hereditary monarchs may exercise this kind of authority, although their powers can also be limited by modern law.

SUBTOPIC: Charismatic authority
Charismatic authority rests on followers' devotion to a leader believed to possess exceptional qualities, vision, courage, or ability. It can inspire rapid political change, but it may be unstable because it depends heavily on the individual leader.

SUBTOPIC: Legal-rational authority
Legal-rational authority rests on laws, rules, and clearly defined offices rather than personal status or custom. Elected presidents, judges, and civil servants exercise authority within legal powers and procedures. Compliance is directed toward the office and the rules governing it.

SUBTOPIC: Legitimacy
Legitimacy is the belief that a government, institution, or political decision has a rightful basis and deserves acceptance. It can arise from constitutional procedures, fair elections, effective performance, tradition, public consent, and respect for rights.

SUBTOPIC: Characteristics of legitimacy
Legitimacy involves acceptance, a belief in rightful authority, and some degree of public consent. It can strengthen stability and voluntary compliance. It is not permanent: corruption, repression, unfairness, or failure to meet public expectations can weaken it.

SUBTOPIC: Sovereignty
Sovereignty is the supreme authority of the state to make and enforce laws within its territory and its independence from external control. Internally, it refers to the highest legal authority; externally, it concerns the state's independence and equal standing in international relations.

SUBTOPIC: Features of sovereignty
Traditional accounts describe sovereignty as supreme, permanent, universal within the territory, and indivisible in its ultimate legal sense. In practice, state power is constrained by constitutions, international commitments, public opinion, economic dependence, and shared institutions.

SUBTOPIC: Location of sovereignty
The location of sovereignty concerns where ultimate political and legal authority is understood to reside. Different systems locate it in the people, the constitution, parliament, or another recognised institution. In democratic systems, popular sovereignty means that government authority is derived from the people.

SUBTOPIC: Types of sovereignty
Sovereignty may be discussed as internal and external, legal and political, popular, de jure (recognised by law), and de facto (exercised in practice). These distinctions help explain the difference between formal authority and actual power.

SUBTOPIC: Limitations on the sovereign power of the state
State power is limited in practice by constitutional rules, human rights, judicial review, elections, public opinion, civil society, federal arrangements, international law, treaties, economic interdependence, and the need for public cooperation. Sovereignty does not mean that governments can act without consequences or constraints.

SUBTOPIC: Chapter summary
Power shapes behaviour and outcomes. Influence changes choices without necessarily using commands. Authority is power accepted as rightful, while legitimacy is the belief that political rule is justified. Sovereignty concerns the state's supreme legal authority, although its exercise is constrained in practice.

SUBTOPIC: Revision questions
1. Identify and explain four sources of power. 2. Distinguish power from influence and authority. 3. Explain Weber's three types of authority. 4. What is legitimacy? 5. Discuss four limitations on the sovereign power of the state.`
},
{
title:'Chapter 4 — Ideology',
deck:'The political ideas that explain society, justify institutions, and guide change.',
section:'The ABC of Political Science · Chapter Four',
src:'Based on The ABC of Political Science, Chapter Four',
take:'Ideologies are connected political ideas, not single unchanging formulas; each contains different strands and interpretations.',
text:`SUBTOPIC: Meaning of ideology
An ideology is a connected set of political ideas, values, and beliefs about how society is organised, how power should be distributed, and what political goals should be pursued. It provides a way to interpret society and a guide for political action.

SUBTOPIC: Features of ideology
Ideologies contain related ideas and values, offer explanations of social and political life, identify problems, and propose preferred arrangements or goals. They can inspire collective action and may be used to justify existing institutions or demand change.

SUBTOPIC: Functions of ideology
Ideology helps people understand political events, define group identity, set goals, mobilise support, guide public policy, legitimise political authority, and criticise existing arrangements. It can unite supporters but may also create division when beliefs are treated as unquestionable.

SUBTOPIC: Classification of ideology
Ideologies can be classified in different ways, including their views on equality, liberty, tradition, ownership, markets, and the role of the state. Political labels are broad guides; real movements often combine ideas from several traditions.

SUBTOPIC: The left-right continuum of ideology
The left-right continuum is a simplified way of locating political positions. The left is commonly associated with greater emphasis on equality and social change, while the right often gives greater weight to tradition, hierarchy, or market freedom. The meaning of these labels changes across countries and periods.

SUBTOPIC: Major ideologies
Major ideologies discussed in the chapter include feudalism, liberalism, conservatism, capitalism, socialism, Marxism-Leninism, communism, fascism, Nazism, and anarchism. Each offers a different account of authority, freedom, equality, property, and social organisation.

SUBTOPIC: Feudalism
Feudalism was a hierarchical social and political system in which landholding and personal obligations shaped power. Lords controlled land and offered protection, while vassals and peasants owed service, labour, or other duties. Political authority was dispersed among local holders of land and power.

SUBTOPIC: Liberalism
Liberalism places individual liberty, rights, consent, and limits on arbitrary power at the centre of political life. Liberal traditions generally support constitutional government and the rule of law, while disagreeing about the extent of state action needed to protect meaningful freedom.

SUBTOPIC: Features of liberalism
Important liberal principles include consent of the governed, constitutionalism, equality before the law, individual freedom, individualism, justice, reason, and toleration. Together they seek to protect people from arbitrary authority and allow individuals to pursue their own lives.

SUBTOPIC: Classical liberalism
Classical liberalism stresses individual liberty, private property, free markets, limited government, and protection from state interference. It argues that government should perform essential functions while leaving substantial room for voluntary exchange and individual choice.

SUBTOPIC: Modern liberalism
Modern liberalism argues that freedom can be undermined by poverty, lack of education, poor health, and unequal opportunity. It therefore supports public action and social services that help people exercise their rights and participate meaningfully in society.

SUBTOPIC: Neo-liberalism
Neo-liberalism generally favours market competition, private enterprise, trade liberalisation, deregulation, and a reduced role for direct state ownership. Supporters associate these policies with efficiency and growth; critics point to inequality, insecurity, and weaker public provision when markets are poorly regulated.

SUBTOPIC: Conservatism
Conservatism values continuity, established institutions, social order, and inherited practices. It is generally cautious about rapid or radical change, arguing that institutions often contain accumulated experience and should be reformed carefully.

SUBTOPIC: Elements of conservatism
Common elements include tradition, authority, hierarchy, property, social stability, and an organic view of society. Conservative thinkers differ, but many argue that political change should respect historical experience and the importance of social bonds.

SUBTOPIC: Classical conservatism
Classical conservatism emerged partly as a reaction against revolutionary attempts to rebuild society from abstract principles. It emphasises gradual reform, established institutions, social duties, and the risks of sudden political transformation.

SUBTOPIC: Neo-conservatism
Neo-conservatism combines support for traditional social values and strong national institutions with a willingness to use state power in areas such as security and foreign policy. Its positions vary across countries and political movements.

SUBTOPIC: Capitalism
Capitalism is an economic system in which productive resources are largely privately owned and goods and services are produced for markets. Investment, competition, wage labour, and the pursuit of profit are central features. Governments still shape capitalist economies through laws, taxation, regulation, and public spending.

SUBTOPIC: Socialism
Socialism is a broad political and economic tradition that seeks greater social and economic equality and collective responsibility for important resources. Socialist approaches differ over public ownership, worker control, planning, markets, and whether change should be gradual or revolutionary.

SUBTOPIC: Features of socialism
Common features include concern for equality, social welfare, cooperation, collective or social ownership of key resources, and reducing exploitation. Different socialist traditions place different emphasis on democratic participation, state planning, trade unions, and market mechanisms.

SUBTOPIC: Marxism-Leninism
Marxism-Leninism is a political tradition that draws on Karl Marx's analysis of class and capitalism and Lenin's theory of revolutionary organisation and the state. It emphasises class struggle, the role of a revolutionary party, and a transition toward a socialist society.

SUBTOPIC: Principles of Marxism
Key principles include dialectical materialism, the doctrine of class struggle, the dictatorship of the proletariat as a proposed transitional political order, and the theory of surplus value. Surplus value refers to value created by workers beyond the value returned to them in wages, which Marxists argue is appropriated by capital owners.

SUBTOPIC: Communism
Communism describes an ideal classless society in which productive resources are held in common and social classes and the coercive state are expected eventually to disappear. Historical governments that called themselves communist developed different political and economic institutions and should be distinguished from the theoretical ideal.

SUBTOPIC: Fascism
Fascism is an authoritarian and ultranationalist ideology that places the nation or state above individual interests and rejects liberal democracy and political pluralism. It is associated with a powerful leader, mass mobilisation, militarism, and suppression of opposition.

SUBTOPIC: Tenets of fascism
Common tenets include extreme nationalism, authoritarian leadership, glorification of force, militarism, anti-liberalism, anti-communism, political mobilisation, and the subordination of individual rights to the state or nation. Fascist movements have used violence and repression against opponents.

SUBTOPIC: Nazism
Nazism was the German form of fascism developed under Adolf Hitler and the National Socialist German Workers' Party. It combined totalitarian rule and extreme nationalism with racist and antisemitic doctrines, expansionism, and state-organised persecution and genocide.

SUBTOPIC: Principles underlying Nazism
Nazism promoted racial hierarchy, antisemitism, the idea of a racially defined national community, loyalty to a supreme leader, territorial expansion, militarism, and the suppression of political opposition. These doctrines led to aggressive war, the Holocaust, and mass atrocities.

SUBTOPIC: Anarchism
Anarchism is a political tradition that opposes coercive hierarchical state authority and seeks forms of social organisation based on voluntary cooperation, mutual aid, and self-management. Anarchist thinkers differ in their views on property, markets, and how communities should organise.

SUBTOPIC: Chapter summary
Ideologies connect political beliefs to preferred social arrangements. Liberalism stresses liberty and rights; conservatism values continuity; capitalism organises production through private ownership and markets; socialism seeks greater equality and collective responsibility. Marxism-Leninism, communism, fascism, Nazism, anarchism, and feudalism offer distinct accounts of power and society.

SUBTOPIC: Revision questions
1. Define ideology and explain four of its functions. 2. Compare classical and modern liberalism. 3. Identify key elements of conservatism. 4. Explain the Marxist principles listed in the chapter. 5. Distinguish fascism from Nazism. 6. What is anarchism?`
},
{
title:'Chapter 5 — Systems of Government',
deck:'How executive and legislative power is organised, and how authority is distributed across territory.',
section:'The ABC of Political Science · Chapter Five',
src:'Based on The ABC of Political Science, Chapter Five',
take:'Compare systems by asking who selects the executive, to whom it is accountable, how powers are divided, and how authority is shared territorially.',
text:`SUBTOPIC: Systems of government
A system of government describes how public authority is organised and exercised. Systems can be compared by the relationship between executive and legislature, the selection and removal of leaders, the distribution of powers, and the degree of centralisation.

SUBTOPIC: Presidential executive system
In a presidential system, the president is both head of state and head of government or holds the central executive role. The president normally has a mandate separate from the legislature and serves for a constitutionally fixed term, subject to constitutional removal procedures.

SUBTOPIC: Features of the presidential executive system
Typical features include separation of powers, a single or monocephalous executive, a president with a distinct electoral mandate, security of tenure, and ministers who are generally subordinate to the president. The constitution defines the powers of each branch and provides checks and balances.

SUBTOPIC: Powers and functions of the executive president
The president may direct government policy, appoint ministers and senior officials subject to legal procedures, implement laws, lead the executive, represent the country, conduct foreign relations, and serve as commander-in-chief. The exact powers depend on the constitution.

SUBTOPIC: Ceremonial and real executive functions
Ceremonial functions include representing national unity, receiving ambassadors, and attending state occasions. Real executive functions involve making policy, directing ministries, appointing officials, managing administration, and taking decisions that shape government action. In some systems these roles are divided between different officeholders.

SUBTOPIC: Strengths and weaknesses of the presidential system
Potential strengths include a clear national mandate, fixed tenure, identifiable leadership, and institutional checks. Weaknesses can include executive-legislative deadlock, excessive concentration of power, winner-takes-all politics, and difficulty removing an ineffective president before the term ends.

SUBTOPIC: Cabinet or parliamentary system of government
In a parliamentary system, the executive emerges from the legislature and remains in office while it retains parliamentary confidence. The prime minister leads the government, and the cabinet is normally drawn from the governing party or coalition in parliament.

SUBTOPIC: Features of the parliamentary system
Common features include a prime minister, a cabinet, collective responsibility, ministers who are usually members of parliament, an official opposition, party discipline, and the possibility of a confidence or censure vote. The executive and legislature are closely connected.

SUBTOPIC: Appointment of ministers
Ministers are usually appointed by the head of state on the advice of the prime minister. They are commonly selected from the governing party or coalition and are expected to support the government's programme and answer to parliament.

SUBTOPIC: Cabinet and parliament
The cabinet is the central decision-making body of the executive, while parliament makes laws, scrutinises government, approves public expenditure, and represents citizens. In parliamentary government, ministers participate in parliament and must maintain its confidence.

SUBTOPIC: Censure motion and confidence
A motion of censure or no-confidence allows parliament to express that it no longer supports the government or a minister. Depending on the constitution, losing a confidence vote may require the government to resign or seek a new election.

SUBTOPIC: Dual or bicephalous executive
A parliamentary system may have two executive figures: a head of state, who performs constitutional or ceremonial functions, and a prime minister, who leads the government. This is described as a dual or bicephalous executive.

SUBTOPIC: Indeterminate term limit
Unlike a president with a fixed term, a parliamentary government may remain in office as long as it retains confidence and complies with election rules. Its duration is therefore not always fixed in advance, although elections must occur within constitutional limits.

SUBTOPIC: Ministers as parliamentarians
Ministers are often members of parliament. This connects executive leadership with the legislature and makes ministers directly answerable during parliamentary debates and questioning.

SUBTOPIC: Official opposition
The official opposition is the largest party or group outside government. It scrutinises government policy, challenges decisions, proposes alternatives, and provides voters with an alternative government.

SUBTOPIC: Parliament as a political platform
Parliament provides a public arena for debate, representation, law-making, questioning ministers, and expressing different political views. It can make government decisions more visible and open to scrutiny.

SUBTOPIC: Power to dissolve parliament
In some parliamentary systems, parliament may be dissolved and a general election called under constitutional rules. The power and process differ between countries and may involve the head of state acting on advice.

SUBTOPIC: Status and role of the prime minister
The prime minister is normally the head of government and leads the cabinet, coordinates ministries, sets policy priorities, and represents the government. The prime minister's authority depends on parliamentary support, party leadership, and constitutional conventions.

SUBTOPIC: Collective responsibility and responsibility to parliament
Collective cabinet responsibility means ministers publicly support agreed government decisions or resign. The government as a whole is politically accountable to parliament and may be required to leave office if it loses confidence.

SUBTOPIC: Arguments for and against the parliamentary system
Advantages can include close executive-legislative cooperation, regular questioning of ministers, and the ability to replace a government that loses confidence. Disadvantages can include unstable coalitions, strong party discipline, executive dominance of parliament, and frequent political crises where support is fragile.

SUBTOPIC: Mixed or hybrid system
A mixed or hybrid system combines features of presidential and parliamentary government. For example, it may have both a directly elected president and a prime minister responsible to parliament. The actual balance of power depends on the constitution and political practice.

SUBTOPIC: Unitary system of government
A unitary system places ultimate constitutional authority in the central government. Local or regional bodies may exercise delegated powers, but their authority is created and can generally be altered by the national constitution or legislature.

SUBTOPIC: Features of unitary states
Features often include a single central source of constitutional authority, uniform national laws, and local authorities operating under powers delegated by the centre. Unitary systems can still decentralise administration and allow local participation.

SUBTOPIC: Reasons for adopting a unitary system
A unitary system may be chosen to promote national unity, simplify administration, reduce duplication, support uniform policies, and strengthen central coordination. It may be suitable where a country is relatively small or where political leaders prioritise a common national framework.

SUBTOPIC: Problems associated with the unitary system
Excessive centralisation can make decisions distant from local communities, overload central institutions, weaken local initiative, and ignore regional differences. Effective decentralisation and local accountability can help address these problems.

SUBTOPIC: Federation and federalism
A federation is a state in which constitutional authority is divided between a national government and regional or state governments. Each level has powers that it can exercise directly, and the division is protected by the constitution.

SUBTOPIC: Distinguishing features of a federation
A federation usually has a written and supreme constitution, at least two levels of government, constitutionally allocated powers, an independent judiciary to interpret the constitution, and mechanisms for regional participation in national decisions.

SUBTOPIC: Necessary conditions for successful federation
Successful federalism is supported by agreement on common purposes, respect for diversity, fair distribution of resources, clear constitutional rules, strong institutions, political trust, and mechanisms for resolving disputes between levels of government.

SUBTOPIC: Distribution of powers in a federation
Federal constitutions allocate responsibilities between levels of government. Exclusive powers belong to one level, while concurrent powers may be exercised by both levels. Clear allocation reduces conflict and helps governments know which responsibilities they must perform.

SUBTOPIC: Exclusive and concurrent powers
Exclusive powers are assigned to only one level of government, such as certain national responsibilities for defence or currency. Concurrent powers are shared, such as areas where both levels may legislate or provide services. The constitution determines which level prevails if laws conflict.

SUBTOPIC: Strengths and weaknesses of federation
Federalism can protect regional autonomy, accommodate diversity, encourage local innovation, and bring government closer to citizens. It can also create duplication, intergovernmental conflict, unequal services between regions, and complex decision-making.

SUBTOPIC: Confederation
A confederation is an association of sovereign states that cooperate through a common organisation for agreed purposes. The member states retain substantial independence, and the central body is usually weaker than a federal government.

SUBTOPIC: Features of confederation
Members usually retain sovereignty, delegate limited powers to common institutions, and make decisions through agreements among member states. The central organisation often depends on members for resources and implementation.

SUBTOPIC: Merits and demerits of confederation
A confederation allows independent states to cooperate while preserving autonomy and can support joint action on shared problems. Its weaknesses include slow decision-making, weak enforcement, dependence on member states, and the risk that members withdraw or fail to comply.

SUBTOPIC: Chapter summary
Presidential and parliamentary systems differ in how the executive is selected and held accountable. Hybrid systems combine features of both. Unitary systems concentrate ultimate constitutional authority nationally, while federations divide authority constitutionally between levels. Confederations are looser associations of sovereign states.

SUBTOPIC: Revision questions
1. Compare presidential and parliamentary government. 2. Explain the role of the prime minister and official opposition. 3. Distinguish a unitary state from a federation. 4. Explain exclusive and concurrent powers. 5. Identify two merits and two demerits of confederation.`
},
{
title:'Chapter 6 — Democracy and Good Governance',
deck:'How citizens participate in government and what makes public authority accountable and effective.',
section:'The ABC of Political Science · Chapter Six',
src:'Based on The ABC of Political Science, Chapter Six',
take:'Democracy requires more than elections: meaningful participation, rights, accountability, the rule of law, and institutions that serve the public.',
text:`SUBTOPIC: Democracy
Democracy is a system of government in which political authority is derived from the people. Citizens participate directly or through elected representatives, and public officials are expected to exercise power under rules that allow accountability, competition, and protection of rights.

SUBTOPIC: Types of democracy
The two broad types discussed are direct democracy and representative democracy. They differ in whether citizens make public decisions themselves or elect representatives to make decisions on their behalf.

SUBTOPIC: Direct democracy
Direct democracy allows citizens to take part personally in making decisions on public issues rather than relying entirely on elected representatives. It may operate through referendums, popular initiatives, and public assemblies.

SUBTOPIC: Merits and demerits of direct democracy
Direct democracy can deepen participation, strengthen civic education, and give citizens direct influence over decisions. Its limitations include the difficulty of involving everyone in complex large-scale states, the risk of majority domination, unequal access to information, and the possibility of oversimplifying difficult policy questions.

SUBTOPIC: Representative democracy
Representative democracy is a system in which citizens elect individuals to make laws and public decisions on their behalf. Elections allow citizens to choose leaders, reward or remove representatives, and influence policy through political parties and public debate.

SUBTOPIC: Essential features of representative democracy
Essential features include regular, free, and fair elections; universal and equal adult suffrage; genuine political competition; freedom of expression and association; access to information; accountable representatives; the rule of law; and protection of minority rights.

SUBTOPIC: Critique of representative democracy
Critics argue that representatives may become distant from citizens, powerful interests may influence policy, election campaigns may oversimplify issues, and participation between elections may be weak. Strong institutions, transparency, civic engagement, and responsive representation can reduce these problems.

SUBTOPIC: Good governance
Good governance refers to the way public power and resources are managed in a manner that is accountable, transparent, participatory, lawful, responsive, effective, and fair. It focuses not only on who governs but also on how decisions are made and implemented.

SUBTOPIC: Evolution of good governance
The idea of good governance gained prominence in development debates as attention shifted from government structures alone to the quality of institutions, public management, accountability, and citizen participation. It became linked to development, democratic reform, and the effective use of public resources.

SUBTOPIC: Key elements or features of good governance
Common elements include participation, rule of law, transparency, responsiveness, consensus-building, equity and inclusion, effectiveness and efficiency, accountability, and strategic vision. These principles help public institutions serve citizens fairly and reliably.

SUBTOPIC: Accountability
Accountability means public officials must explain and justify their decisions and can face consequences for misconduct or poor performance. Elections, parliament, courts, audits, independent oversight bodies, and public scrutiny all support accountability.

SUBTOPIC: Majority rule and minority rights
Democratic decisions often follow majority rule, but democracy also protects the rights of minorities. A majority should not use its numerical advantage to deny others basic rights, equal protection, or a meaningful voice in public life.

SUBTOPIC: Independent judiciary
An independent judiciary applies the law without improper pressure from political leaders or other powerful actors. Courts protect constitutional limits, resolve disputes, uphold rights, and help ensure that public officials act lawfully.

SUBTOPIC: Independent media
Independent media gather and share information, investigate public affairs, provide a platform for debate, and scrutinise those in power. Media freedom supports transparency, although responsible reporting and access to reliable information are also important.

SUBTOPIC: Independent electoral commission
An independent electoral commission administers elections impartially, registers voters, organises polling, counts votes, and announces results according to law. Public confidence depends on fairness, transparency, competence, and independence from partisan control.

SUBTOPIC: Effective police service
An effective police service protects people, prevents and investigates crime, and enforces the law while respecting human rights. Professionalism, impartiality, accountability, adequate training, and public trust are essential to effective policing.

SUBTOPIC: Combating corruption
Combating corruption requires preventing the abuse of entrusted power for private gain. Measures include transparent procurement, clear rules, independent investigation, effective sanctions, public access to information, protected reporting, and ethical public leadership.

SUBTOPIC: Consensus building
Consensus building involves dialogue and negotiation to identify areas of agreement among groups with different interests. It can improve legitimacy and reduce conflict, while still allowing open disagreement and lawful decision-making.

SUBTOPIC: Participation, equity, and inclusion
Participation gives people meaningful opportunities to influence decisions that affect them. Equity and inclusion require attention to groups that may face barriers, so public services and political processes do not systematically exclude parts of society.

SUBTOPIC: Effectiveness, efficiency, and responsiveness
Effectiveness means public institutions achieve their intended goals; efficiency means they use resources wisely; responsiveness means they address citizens' needs in a timely way. These qualities support public confidence and better service delivery.

SUBTOPIC: Chapter summary
Democracy derives authority from the people and can be direct or representative. Elections are essential but not sufficient: rights, participation, accountability, and the rule of law matter too. Good governance concerns the quality of public decision-making and requires transparent, inclusive, effective, and accountable institutions.

SUBTOPIC: Revision questions
1. Distinguish direct democracy from representative democracy. 2. Explain two strengths and two weaknesses of direct democracy. 3. What are the essential features of representative democracy? 4. Define good governance and discuss five of its elements. 5. Explain why independent courts, media, and electoral institutions matter.`
}
];
textbook.forEach((chapter,index)=>{
 chapter.levelNumber=100;
 chapter.levelLabel='POLI 111 · TEXTBOOK';
 chapter.textbookChapter=index+1;
 chapters.push(chapter);
});
window.abcTextbookLoaded=true;
nav();
const chapterMenu=document.getElementById('chapterMenuLevels');
if(chapterMenu){
 const label=document.createElement('p');
 label.className='textbook-outline-note';
 label.textContent='The six chapters marked “POLI 111 · TEXTBOOK” follow The ABC of Political Science. Open a chapter to read or listen to each topic and subtopic.';
 chapterMenu.insertAdjacentElement('afterend',label);
}
})();
